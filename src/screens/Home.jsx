import CategoryThumbs from "../components/CategoryThumbs";
import NewItem from "../components/NewItem";
import circle from "../images/pattern-circles.svg";
import Audiogear from "../components/Audiogear";
import { Link } from "react-router-dom";
import "../styles/Home.css";
export default function Home() {
  return (
    <div>
      <NewItem />
      <CategoryThumbs />
      <div className="trending-list">
        <div className="zx9">
          <img
            src="./assets/home/desktop/image-speaker-zx9.png"
            alt="speaker_image"
            className="zx9-speaker-image"
          />
          <img src={circle} alt="circle pattern" className="circles" />
          <div className="trenditem-info">
            <h2>ZX9 SPEAKER</h2>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to="/product/6/home">
              <button className="zx9-button">SEE PRODUCT</button>
            </Link>
          </div>
        </div>
        <div className="zx7">
          <img
            src="./assets/home/desktop/image-speaker-zx7.jpg"
            alt="speaker_image"
          />
          <div className="zx7-trend-info">
            <h3>ZX7 speaker</h3>
            <Link to="/product/5/home">
              <button className="trend-item-button">SEE PRODUCT</button>
            </Link>
          </div>
        </div>
        <div className="yx1">
          <img
            src="./assets/home/desktop/image-earphones-yx1.jpg"
            alt="earohones"
          />
          <div className="yx1-trend-info">
            <h3>YX1 EARPHONES</h3>
            <Link to="/product/1/home">
              <button className="trend-item-button">SEE PRODUCT</button>
            </Link>
          </div>
        </div>
      </div>
      <Audiogear />
    </div>
  );
}
