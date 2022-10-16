import "../styles/CategoryScreen.css";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { Store } from "../store";
import CategoryThumbs from "../components/CategoryThumbs";
import Audiogear from "../components/Audiogear";

export default function CategoryScreen() {
  const { categoryName } = useParams();
  const {
    state: { data },
  } = useContext(Store);
  const filteredData = data.filter((item) => item.category === categoryName);
  return (
    <div>
      <div className="category-header">
        <h1>{categoryName}</h1>
      </div>
      <div className="category-wrapper">
        <div className="products">
          {filteredData.map((item, index) => (
            <div
              className={
                index % 2 === 0 ? "product-item" : "product-item reverse"
              }
              key={item.id}
            >
              <img
                className="desktop-size-image"
                src={item.categoryImage.desktop}
                alt="product_image"
              />
              <img
                className="tablet-size-image"
                src={item.categoryImage.tablet}
                alt="product_image"
              />
              <img
                className="mobile-size-image"
                src={item.categoryImage.mobile}
                alt="product_image"
              />
              <div className="product-description">
                {item.new && <div className="new-sign">NEW PRODUCT</div>}
                <h2 className="styled-header">{item.name}</h2>
                <p className="styled-paragraph">{item.description}</p>
                <Link to={`/product/${item.id}/category-${categoryName}`}>
                  <button className="styled-button">SEE PRODUCT</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <CategoryThumbs />
        <Audiogear />
      </div>
    </div>
  );
}
