import { useContext } from "react";
import { Store } from "../store";
import { Link } from "react-router-dom";
import cartIcon from "../images/icon-cart.svg";
import logo from "../images/logo.svg";
import "../styles/Header.css";
import CategoryThumbs from "../components/CategoryThumbs";
import { useState } from "react";
export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const {
    state: { categories },
  } = useContext(Store);
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
            <img src={logo} alt="" />
          </div>
          <div className="nav-links">
            <Link to="/">HOME</Link>
            {categories.map((item) => (
              <Link to="/" key={item}>
                {item}
              </Link>
            ))}
          </div>
          <div className="cart-icon">
            <img src={cartIcon} alt="cart-icon" />
          </div>
        </div>
        <div className={showDropdown ? "dropdown active" : "dropdown"}>
          <CategoryThumbs />
        </div>
      </header>
      <div className={showDropdown ? "background show" : "background"}></div>
    </>
  );
}
