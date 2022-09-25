import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const addToCart = (cartedProduct) => {
    console.log(cartedProduct);
    const newCart = [...cart, cartedProduct];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            data={product}
            key={product.id}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h4>This is For Cart</h4>
        <p>selected items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
