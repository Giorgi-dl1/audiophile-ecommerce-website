import { useContext, useState, useEffect } from "react";
import { Store } from "../store";
import { Link, useLocation } from "react-router-dom";
import cartIcon from "../images/icon-cart.svg";
import logo from "../images/logo.svg";
import "../styles/Header.css";
import CategoryThumbs from "../components/CategoryThumbs";
import Cart from "./Cart";
export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const {
    state: { categories, cartItems },
  } = useContext(Store);

  const totalCartItems = cartItems.reduce((a, c) => a + c.quantity, 0);
  return (
    <>
      <header>
        <div className="navbar">
          <div className="brand">
            <div
              className="hamburger"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <div className="li"></div>
              <div className="li"></div>
              <div className="li"></div>
            </div>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/">HOME</Link>
            {categories.map((item) => (
              <Link to={`/category/${item}`} key={item}>
                {item}
              </Link>
            ))}
          </div>
          <div className="cart-icon">
            {totalCartItems >= 1 && (
              <div
                className="cart-icon-quantity"
                onClick={() => setShowCart(!showCart)}
              >
                {totalCartItems}
              </div>
            )}

            <img
              src={cartIcon}
              alt="cart-icon"
              className="cart-image"
              onClick={() => setShowCart(!showCart)}
            />
          </div>
        </div>
        <div className={showDropdown ? "dropdown active" : "dropdown"}>
          <CategoryThumbs setShowDropdown={setShowDropdown} />
        </div>
        <div className={showCart ? "cart-div active" : "cart-div"}>
          <Cart setShowCart={setShowCart} />
        </div>
      </header>
      <div className={showDropdown ? "background show" : "background"} />
      <div className={showCart ? "background cart-background" : "background"} />
    </>
  );
}
