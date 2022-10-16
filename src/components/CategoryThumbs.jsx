import { useContext } from "react";
import arrow from "../images/icon-arrow-right.svg";
import { Store } from "../store";
import "../styles/CategoryThumbs.css";
import { Link } from "react-router-dom";

export default function CategoryThumbs({ setShowDropdown }) {
  const {
    state: { categories },
  } = useContext(Store);
  const dropdownHandler = () => {
    if (!setShowDropdown) {
      return;
    }
    setShowDropdown(false);
  };
  return (
    <div className="category-thumbs">
      {categories.map((item) => (
        <div className="category-thumb" key={item}>
          <img
            src={`/assets/image-category-thumbnail-${item}.png`}
            alt={item}
            className="thumb-image"
          />
          <p>{item}</p>
          <Link to={`/category/${item}`} onClick={() => dropdownHandler()}>
            <span>shop</span>
            <img src={arrow} alt="arrow icon" />
          </Link>
        </div>
      ))}
    </div>
  );
}
