import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Store } from "../store";
import "../styles/CheckoutModal.css";
export default function CheckoutModal({ setPaymentSuccess }) {
  const [showAll, setShowAll] = useState(false);
  const {
    state: { cartItems },
    dispatch,
  } = useContext(Store);
  const itemsToShow = showAll ? cartItems : cartItems.slice(0, 1);
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  const grandTotal = totalPrice + 50;

  const handleClick = () => {
    dispatch({ type: "REMOVE_ALL_ITEMS_FROM_CART" });
    localStorage.removeItem("cartItems");
    setPaymentSuccess(false);
  };
  return (
    <>
      <div className="checkout-modal">
        <div className="check-circle">
          <div className="check-icon" />
        </div>
        <div className="styled-header">THANK YOU FOR YOUR ORDER</div>
        <p style={{ opacity: 0.5 }}>
          You will recieve an email confirmation shortly
        </p>
        <div className="payment-info">
          <div className="items-wrapper">
            <div className="items-list">
              {itemsToShow?.map((item) => (
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
                  <span>x{item.quantity}</span>
                </div>
              ))}
            </div>

            {cartItems.length > 1 && (
              <div className="list-controller">
                <p onClick={() => setShowAll(!showAll)}>
                  {showAll
                    ? "show less"
                    : `and ${cartItems.length - 1} other item(s)`}
                </p>
              </div>
            )}
          </div>

          <div className="payment-details">
            <p style={{ opacity: 0.5 }}>GRAND TOTAL</p>
            <p className="price">$ {grandTotal.toLocaleString()}</p>
          </div>
        </div>
        <Link to="/" onClick={handleClick}>
          <div className="styled-button" style={{ textAlign: "center" }}>
            BACK TO HOME
          </div>
        </Link>
      </div>
    </>
  );
}
