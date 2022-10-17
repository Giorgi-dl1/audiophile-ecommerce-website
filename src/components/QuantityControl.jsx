import { useContext } from "react";
import { Store } from "../store";

export default function QuantityControl({ quantity, setQuantity, item }) {
  const { dispatch } = useContext(Store);

  const quantityHandler = (amount) => {
    if (quantity + amount <= 0 && setQuantity) {
      return;
    }
    if (item && item.quantity + amount <= 0) {
      dispatch({ type: "REMOVE_FROM_CART", payload: item.id });
      return;
    }
    if (item) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...item, quantity: amount },
      });
      return;
    }
    setQuantity(quantity + amount);
  };
  return (
    <div className="quantity-control">
      <span
        className={
          quantity === 1 && setQuantity ? "disabled-button" : "quantity-button"
        }
        onClick={() => {
          quantityHandler(-1);
        }}
      >
        -
      </span>
      <span>{quantity}</span>
      <span className="quantity-button" onClick={() => quantityHandler(1)}>
        +
      </span>
    </div>
  );
}
