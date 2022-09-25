import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";
const Product = ({ data, addToCart }) => {
  const { name, img, seller, price, ratings } = data;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: {price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Rating: {ratings} stars</small>
        </p>
      </div>
      <button onClick={() => addToCart(data)} className="btn-cart">
        <p className="btn-text">Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
