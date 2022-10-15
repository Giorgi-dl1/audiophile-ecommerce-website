import { useContext } from "react";
import { Store } from "../store";
import { Link } from "react-router-dom";
import cartIcon from "../images/icon-cart.svg";
import logo from "../images/logo.svg";
import "../styles/Header.css";
export default function Header() {
  const {
    state: { categories },
  } = useContext(Store);
  return (
    <header>
      <div className="navbar">
        <div className="brand">
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
    </header>
  );
}
