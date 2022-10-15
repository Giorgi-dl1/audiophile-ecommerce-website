import { useContext } from "react";
import CategoryThumbs from "../components/CategoryThumbs";
import NewItem from "../components/NewItem";
import { Store } from "../store";
import "../styles/Home.css";
import circle from "../images/pattern-circles.svg";
import Audiogear from "../components/Audiogear";
export default function Home() {
  const {
    state: { data },
  } = useContext(Store);
  console.log(data);
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
            <button className="zx9-button">SEE PRODUCT</button>
          </div>
        </div>
        <div className="zx7">
          <img
            src="./assets/home/desktop/image-speaker-zx7.jpg"
            alt="speaker_image"
          />
          <div className="zx7-trend-info">
            <h3>ZX7 speaker</h3>
            <button className="trend-item-button">SEE PRODUCT</button>
          </div>
        </div>
        <div className="yx1">
          <img
            src="./assets/home/desktop/image-earphones-yx1.jpg"
            alt="earohones"
          />
          <div className="yx1-trend-info">
            <h3>YX1 EARPHONES</h3>
            <button className="trend-item-button">SEE PRODUCT</button>
          </div>
        </div>
      </div>
      <Audiogear />
    </div>
  );
}
