import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  return (
    <div>
      <div className="cart-container">
        <h4>This is For Cart</h4>
        <p>selected items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Cart;
