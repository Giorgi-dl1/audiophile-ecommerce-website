import { useContext } from "react";
import { Store } from "../store";
import { Link, useLocation } from "react-router-dom";
import cartIcon from "../images/icon-cart.svg";
import logo from "../images/logo.svg";
import "../styles/Header.css";
import CategoryThumbs from "../components/CategoryThumbs";
import { useState } from "react";
import { useEffect } from "react";
export default function Header() {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
            <img src={cartIcon} alt="cart-icon" />
          </div>
        </div>
        <div className={showDropdown ? "dropdown active" : "dropdown"}>
          <CategoryThumbs setShowDropdown={setShowDropdown} />
        </div>
      </header>
      <div className={showDropdown ? "background show" : "background"}></div>
    </>
  );
}
