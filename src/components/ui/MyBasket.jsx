import React from 'react';
import { useDispatch } from 'react-redux';
import { openAuthModal } from '../../redux/authSlice';
import './MyBasket.css';
import { useCart } from '../../context/CartContext';

const MyBasket = () => {
  const dispatch = useDispatch();
  const {
    cartCount,
    itemsTotal,
    deliveryCharge,
    grandTotal,
    clearCart,
  } = useCart();

  const freeDeliveryThreshold = 500;
  const discount = 0;

  const handleCheckout = () => {
    if (cartCount === 0) return;
    dispatch(openAuthModal());
  };

  return (
    <div className="my-basket">
      <h2 className="basket-title">MY BASKET</h2>

      <div className="basket-total-items">
        Total Item(s) - {cartCount}
      </div>

      <button
        className="checkout-btn"
        disabled={cartCount === 0}
        type="button"
        onClick={handleCheckout}
      >
        Checkout
      </button>

      <div className="basket-row">
        <span>Subtotal</span>
        <span>₹ {itemsTotal.toFixed(2)}</span>
      </div>

      <div className="basket-row">
        <span>Free Delivery</span>
        <span>₹ {freeDeliveryThreshold}</span>
      </div>

      <div className="basket-row coupon-row">
        <span>Coupon</span>
        <button className="apply-btn" type="button">
          Apply
        </button>
      </div>

      <div className="basket-row">
        <span>Discount</span>
        <span className="discount-value">- ₹ {discount.toFixed(2)}</span>
      </div>

      <div className="basket-row">
        <span>Delivery Charge</span>
        <span>₹ {deliveryCharge.toFixed(2)}</span>
      </div>

      <div className="basket-row total-row">
        <span>Total Amount</span>
        <span>₹ {grandTotal.toFixed(2)}</span>
      </div>

      <button
        className="clear-cart-btn"
        onClick={clearCart}
        disabled={cartCount === 0}
        type="button"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default MyBasket;