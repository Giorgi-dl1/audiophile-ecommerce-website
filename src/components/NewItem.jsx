import { Link } from "react-router-dom";
import "../styles/NewItem.css";
export default function NewItem() {
  return (
    <div className="newitem-wrapper">
      <img
        src="./assets/home/desktop/image-hero.jpg"
        alt="image_hero"
        className="desktop-size-image"
      />
      <img
        src="./assets/home/tablet/image-header.jpg"
        alt="image_hero"
        className="tablet-size-image"
      />
      <img
        src="./assets/home/mobile/image-header.jpg"
        alt="image_hero"
        className="mobile-size-image"
      />
      <div className="newitem-info">
        <div className="new-sign">NEW PRODUCT</div>
        <h1>XX99 Mark II Headphones</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to="/product/4/home">
          <button className="styled-button">SEE PRODUCT</button>
        </Link>
      </div>
    </div>
  );
}
