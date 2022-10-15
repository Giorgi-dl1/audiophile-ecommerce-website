import "../styles/NewItem.css";
export default function NewItem() {
  return (
    <div className="newitem-wrapper">
      <img src="./assets/home/desktop/image-hero.jpg" alt="image_hero" />
      <div className="newitem-info">
        <div className="new-sign">NEW PRODUCT</div>
        <h1>XX99 Mark II Headphones</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button>SEE PRODUCT</button>
      </div>
    </div>
  );
}
