import React from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/ProductScreen.css";
import { Store } from "../store";
import { useState } from "react";
import { useEffect } from "react";
import Audiogear from "../components/Audiogear";
export default function ProductScreen() {
  const [quantity, setQuantity] = useState(1);
  const [suggestedItems, setSuggestedItems] = useState([]);
  const { id, redirect } = useParams();
  const {
    state: { data },
  } = useContext(Store);

  const product = data.find((item) => item.id === Number(id));

  const redirectString = redirect.split("-").join("/");
  const redirectUrl = redirect === "home" ? "/" : `/${redirectString}`;

  useEffect(() => {
    setSuggestedItems(
      data.filter((item) => item.id !== Number(id)).slice(0, 3)
    );
    setQuantity(1);
  }, [id, data]);
  console.log(suggestedItems);

  const createMarkup = () => {
    return { __html: product.features };
  };

  const updateQuantity = (amount) => {
    if (quantity + amount <= 0) {
      return;
    }
    setQuantity(quantity + amount);
  };
  return (
    <>
      <div className="productscreen-wrapper">
        <div className="goback-link">
          <Link to={`${redirectUrl}`}>Go Back</Link>
        </div>

        <div className="product-item">
          <img
            className="desktop-size-image"
            src={product.categoryImage.desktop}
            alt="product_image"
          />
          <img
            className="tablet-size-image"
            src={product.categoryImage.tablet}
            alt="product_image"
          />
          <img
            className="mobile-size-image"
            src={product.categoryImage.mobile}
            alt="product_image"
          />
          <div className="product-description">
            {product.new && <div className="new-sign">NEW PRODUCT</div>}
            <h2 className="styled-header">{product.name}</h2>
            <p className="styled-paragraph">{product.description}</p>
            <div className="price">
              $ {product.price.toLocaleString("en-US")}
            </div>
            <div className="addtocart-div">
              <div className="quantity-control">
                <span
                  className={
                    quantity === 1 ? "disabled-button" : "quantity-button"
                  }
                  onClick={() => {
                    updateQuantity(-1);
                  }}
                >
                  -
                </span>
                <span>{quantity}</span>
                <span
                  className="quantity-button"
                  onClick={() => updateQuantity(1)}
                >
                  +
                </span>
              </div>
              <button className="styled-button">ADD TO CART</button>
            </div>
          </div>
        </div>
        <div className="features-attributes">
          <div className="features">
            <h2 className="styled-header">FEATURES</h2>
            <section
              className="styled-paragraph"
              dangerouslySetInnerHTML={createMarkup()}
              style={{ whiteSpace: "pre-line" }}
            />
          </div>
          <div className="attributes">
            <h2 className="styled-header">IN THE BOX</h2>
            <div className="attribute-list">
              {product.includes.map((attribute) => (
                <div className="attribute" key={attribute.item}>
                  <span className="attribute-quantity">
                    {attribute.quantity}x
                  </span>
                  <span className="styled-paragraph">{attribute.item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="first-second">
            <img
              className="desktop-size-image"
              src={product.gallery.first.desktop}
              alt="gallery_image"
            />
            <img
              className="tablet-size-image"
              src={product.gallery.first.tablet}
              alt="gallery_image"
            />
            <img
              className="mobile-size-image"
              src={product.gallery.first.mobile}
              alt="gallery_image"
            />
            <img
              className="desktop-size-image"
              src={product.gallery.second.desktop}
              alt="gallery_image"
            />
            <img
              className="tablet-size-image"
              src={product.gallery.second.tablet}
              alt="gallery_image"
            />
            <img
              className="mobile-size-image"
              src={product.gallery.second.mobile}
              alt="gallery_image"
            />
          </div>
          <div className="third">
            <img
              className="desktop-size-image"
              src={product.gallery.third.desktop}
              alt="gallery_image"
            />
            <img
              className="tablet-size-image"
              src={product.gallery.third.tablet}
              alt="gallery_image"
            />
            <img
              className="mobile-size-image"
              src={product.gallery.third.mobile}
              alt="gallery_image"
            />
          </div>
        </div>
        <div className="suggested-items">
          <div className="styled-header" style={{ textAlign: "center" }}>
            YOU MAY ALSO LIKE
          </div>
          <div className="suggested-items-list">
            {suggestedItems.map((item) => (
              <div className="suggested-item" key={item.id}>
                <img
                  className="desktop-size-image"
                  src={item.image.desktop}
                  alt="suggested-item"
                />
                <img
                  className="tablet-size-image"
                  src={item.image.tablet}
                  alt="suggested-item"
                />
                <img
                  className="mobile-size-image"
                  src={item.image.mobile}
                  alt="suggested-item"
                />
                <h4 className="styled-header" style={{ fontSize: "1.4rem" }}>
                  {item.name}
                </h4>
                <Link to={`/product/${item.id}/${redirect}`}>
                  <button className="styled-button">SEE PRODUCT</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Audiogear />
      </div>
      <div className="navbar-background" />
    </>
  );
}
