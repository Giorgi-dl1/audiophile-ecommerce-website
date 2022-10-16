import "../styles/Audiogear.css";

export default function Audiogear() {
  return (
    <div className="audiogear">
      <div className="info">
        <h2>
          Bringing you the <span>best</span> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="audiogear-image">
        <img
          src="/assets/shared/desktop/image-best-gear.jpg"
          className="desktop-size-image"
          alt="boy with earphones"
        />
        <img
          src="/assets/shared/tablet/image-best-gear.jpg"
          className="tablet-size-image"
          alt="boy with earphones"
        />
        <img
          src="/assets/shared/mobile/image-best-gear.jpg"
          className="mobile-size-image"
          alt="boy with earphones"
        />
      </div>
    </div>
  );
}
