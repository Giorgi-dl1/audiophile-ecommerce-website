import { useContext } from "react";
import arrow from "../images/icon-arrow-right.svg";
import { Store } from "../store";
import "../styles/CategoryThumbs.css";
import { Link } from "react-router-dom";

export default function CategoryThumbs() {
  const {
    state: { categories },
  } = useContext(Store);
  return (
    <div className="category-thumbs">
      {categories.map((item) => (
        <div className="category-thumb" key={item}>
          <img
            src={`./assets/image-category-thumbnail-${item}.png`}
            alt={item}
            className="thumb-image"
          />
          <p>{item}</p>
          <Link className="/">
            <span>shop</span>
            <img src={arrow} alt="arrow icon" />
          </Link>
        </div>
      ))}
    </div>
  );
}
