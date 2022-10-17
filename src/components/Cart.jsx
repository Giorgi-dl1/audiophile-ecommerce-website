import { useContext, useEffect } from "react";
import { Store } from "../store";
import QuantityControl from "./QuantityControl";
import "../styles/Cart.css";
import { useRef } from "react";
export default function Cart({ setShowCart }) {
  const cartRef = useRef(null);
  const {
    state: { cartItems },
    dispatch,
  } = useContext(Store);
  const removeAll = () => {
    dispatch({ type: "REMOVE_ALL_ITEMS_FROM_CART" });
  };

  useEffect(() => {
    function handleClickOutside(event) {
      console.log(event.target.classList);
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target) &&
        !event.target.classList.contains("cart-image") &&
        cartRef.current &&
        !cartRef.current.contains(event.target) &&
        !event.target.classList.contains("cart-icon-quantity")
      ) {
        setShowCart(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartRef, setShowCart]);

  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  return cartItems.length >= 1 ? (
    <div className="cart" ref={cartRef}>
      <div className="cart-flex cart-header">
        <h4 style={{ fontSize: "1.3rem" }} className="styled-header">
          Cart <span>({cartItems.length})</span>
        </h4>
        <p className="remove-all" onClick={() => removeAll()}>
          Remove all
        </p>
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item cart-flex" key={item.id}>
            <div className="cart-item-info">
              <img
                className="desktop-size-image thumbnail"
                src={item.categoryImage.desktop}
                alt="item"
              />
              <img
                className="tablet-size-image thumbnail"
                src={item.categoryImage.tablet}
                alt="item"
              />
              <img
                className="mobile-size-image thumbnail"
                src={item.categoryImage.mobile}
                alt="item"
              />
              <div className="name-price">
                <h5>{item.name.split(" ").slice(0, -1).join(" ")}</h5>
                <p>$ {item.price.toLocaleString()}</p>
              </div>
            </div>
            <QuantityControl quantity={item.quantity} item={item} />
          </div>
        ))}
      </div>
      <div className="cart-flex">
        <p style={{ opacity: 0.5 }}>TOTAL</p>
        <div className="price">$ {totalPrice.toLocaleString()}</div>
      </div>
      <div className="styled-button" style={{ textAlign: "center" }}>
        CHECKOUT
      </div>
    </div>
  ) : (
    <div className="cart" ref={cartRef}>
      <div className="cart-empty">
        <h3 className="styled-header">Cart is empty</h3>
      </div>
    </div>
  );
}
