import { useEffect, useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Store } from "../store";
import { validateForm } from "../utils";
import CheckoutModal from "../components/CheckoutModal";
import FormInput from "../components/FormInput";
import "../styles/CheckoutScreen.css";
export default function CheckoutScreen() {
  const initialFormValues = localStorage.getItem("checkoutInfo")
    ? JSON.parse(localStorage.getItem("checkoutInfo"))
    : {
        name: "",
        email: "",
        number: "",
        address: "",
        zipCode: "",
        city: "",
        country: "",
        paymentMethod: "e-Money",
      };
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState({});
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { redirect } = useParams();
  const navigate = useNavigate();
  const {
    name,
    email,
    number,
    address,
    zipCode,
    city,
    country,
    paymentMethod,
    eMoneyNumber,
    eMoneyPin,
  } = formValues;

  const {
    state: { cartItems },
  } = useContext(Store);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValues = { ...formValues, [name]: value };
    setFormValues(updatedValues);
    localStorage.setItem("checkoutInfo", JSON.stringify(updatedValues));
  };

  const handleSubmit = () => {
    setFormErrors(validateForm(formValues));
    if (!Object.keys(validateForm(formValues)).length) {
      setPaymentSuccess(true);
    }
  };

  const redirectString = redirect.split("-").join("/");
  const redirectUrl = redirect === "home" ? "/" : `/${redirectString}`;

  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  const vat = totalPrice * 0.2;
  const shippingPrice = 50;
  const grandTotal = totalPrice + shippingPrice;

  useEffect(() => {
    if (!cartItems.length) {
      navigate(redirectUrl);
    }
  }, [cartItems, navigate, redirectUrl]);
  return (
    <>
      <div className="checkoutscreen-wrapper">
        <div className="goback-link">
          <Link to={`${redirectUrl}`}>Go Back</Link>
        </div>
        <div className="form-summary">
          <div className="checkout-form">
            <div className="styled-header">CHECKOUT</div>
            <form className="form">
              <div className="form-section">
                <div className="form-section-header">BILLING DETAILS</div>
                <div className="form-flex">
                  <FormInput
                    error={formErrors.name}
                    value={name}
                    name="name"
                    label="Name"
                    handleChange={handleChange}
                    holder="Alex Ward"
                  />
                  <FormInput
                    error={formErrors.email}
                    value={email}
                    name="email"
                    label="Email"
                    handleChange={handleChange}
                    holder="alexei@mail.com"
                  />
                </div>
                <FormInput
                  error={formErrors.number}
                  value={number}
                  name="number"
                  label="Phone Number"
                  handleChange={handleChange}
                  holder="(202)-555-0136"
                />
              </div>

              <div className="form-section">
                <div className="form-section-header">SHIPPING INFO</div>
                <FormInput
                  error={formErrors.address}
                  value={address}
                  name="address"
                  label="Address"
                  handleChange={handleChange}
                  holder="1137 Williams Avenue"
                  fullWidth={true}
                />

                <div className="form-flex">
                  <FormInput
                    error={formErrors.zipCode}
                    value={zipCode}
                    name="zipCode"
                    label="Zip Code"
                    handleChange={handleChange}
                    holder="1001"
                  />
                  <FormInput
                    error={formErrors.city}
                    value={city}
                    name="city"
                    label="City"
                    handleChange={handleChange}
                    holder="New York"
                  />
                </div>
                <FormInput
                  error={formErrors.country}
                  value={country}
                  name="country"
                  label="Country"
                  handleChange={handleChange}
                  holder="United States"
                />
              </div>

              <div className="form-section">
                <div className="form-section-header">PAYMENT DETAILS</div>
                <div className="radio-section">
                  <label htmlFor="payment">Payment method</label>
                  <div className="radio-buttons">
                    <div className="radio-button">
                      <label className="custom-radio-button">
                        <input
                          type="radio"
                          id="e-money"
                          name="paymentMethod"
                          value="e-Money"
                          onChange={handleChange}
                          checked={paymentMethod === "e-Money"}
                        />
                        <div className="checkmark" />
                      </label>

                      <label htmlFor="e-money">e-Money</label>
                    </div>
                    <div className="radio-button">
                      <label className="custom-radio-button">
                        <input
                          type="radio"
                          id="cash"
                          name="paymentMethod"
                          value="cash"
                          onChange={handleChange}
                          checked={paymentMethod === "cash"}
                        />
                        <div className="checkmark" />
                      </label>

                      <label htmlFor="cash">Cash Delivery</label>
                    </div>
                  </div>
                </div>
                {paymentMethod === "e-Money" ? (
                  <div className="form-flex">
                    <FormInput
                      error={formErrors.eMoneyNumber}
                      value={eMoneyNumber || ""}
                      name="eMoneyNumber"
                      label="e-Money Number"
                      handleChange={handleChange}
                      holder="238521993"
                    />
                    <FormInput
                      error={formErrors.eMoneyPin}
                      value={eMoneyPin || ""}
                      name="eMoneyPin"
                      label="e-Money Pin"
                      handleChange={handleChange}
                      holder="6891"
                    />
                  </div>
                ) : (
                  <dvi
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "2rem",
                    }}
                  >
                    <span>
                      <svg
                        width="48"
                        height="48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z"
                          fill="#D87D4A"
                        />
                      </svg>
                    </span>
                    <span
                      style={{
                        opacity: 0.5,
                        lineHeight: "25px",
                        maxWidth: "550px",
                      }}
                    >
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </span>
                  </dvi>
                )}
              </div>
            </form>
          </div>
          <div className="checkout-summary">
            <h5 className="styled-header">SUMMARY</h5>
            <div className="cart-items checkout-cart-items">
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
                  <span>x{item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="total-taxes">
              <div className="cart-flex">
                <p style={{ opacity: 0.5 }}>TOTAL</p>
                <div className="price">$ {totalPrice.toLocaleString()}</div>
              </div>
              <div className="cart-flex">
                <p style={{ opacity: 0.5 }}>SHIPPING</p>
                <div className="price">$ {shippingPrice}</div>
              </div>
              <div className="cart-flex">
                <p style={{ opacity: 0.5 }}>VAT (INCLUDED)</p>
                <div className="price">$ {vat.toLocaleString()}</div>
              </div>
            </div>

            <div className="cart-flex">
              <p style={{ opacity: 0.5 }}>GRAND TOTAL</p>
              <div className="price text-orange">
                $ {grandTotal.toLocaleString()}
              </div>
            </div>
            <div
              onClick={handleSubmit}
              className="styled-button"
              style={{ textAlign: "center" }}
            >
              CONTINUE & PAY
            </div>
          </div>
        </div>
        {paymentSuccess && (
          <CheckoutModal setPaymentSuccess={setPaymentSuccess} />
        )}
      </div>
      <div className="navbar-background" />

      <div className={paymentSuccess ? "modal-background" : ""} />

      <div className="checkout-background" />
    </>
  );
}
