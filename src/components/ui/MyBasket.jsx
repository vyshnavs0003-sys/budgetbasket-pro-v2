import React from 'react';
import './MyBasket.css';

const MyBasket = () => {
  return (
    <div className="my-basket">
      <h2 className="basket-title">MY BASKET</h2>

      <div className="basket-total-items">
        Total Item(s) - 0
      </div>

      <button className="checkout-btn">Checkout</button>

      <div className="basket-row">
        <span>Subtotal</span>
        <span>₹ 0.00</span>
      </div>

      <div className="basket-row">
        <span>Free Delivery</span>
        <span>₹ 500</span>
      </div>

      <div className="basket-row coupon-row">
        <span>Coupon</span>
        <button className="apply-btn">Apply</button>
      </div>

      <div className="basket-row">
        <span>Discount</span>
        <span className="discount-value">- ₹ 0.00</span>
      </div>

      <div className="basket-row">
        <span>Delivery Charge</span>
        <span>₹ 30</span>
      </div>

      <div className="basket-row total-row">
        <span>Total Amount</span>
        <span>₹ 0.00</span>
      </div>

      <button className="clear-cart-btn">Clear Cart</button>
    </div>
  );
};

export default MyBasket;