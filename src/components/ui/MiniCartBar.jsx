import React from "react";
import { useDispatch } from "react-redux";
import { openAuthModal } from "../../redux/authSlice";
import { useCart } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "./MiniCartBar.css";

const MiniCartBar = () => {
  const dispatch = useDispatch();
  const { cartItems, grandTotal, clearCart } = useCart();

  // Total quantity of all products
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (!cartItems || cartItems.length === 0) return null;

  const handleCheckout = () => {
    dispatch(openAuthModal());
  };

  return (
    <div className="mini-cart-bar">
      <div className="cart-info">
        <FaShoppingCart className="cart-icon" />
        <span>{totalItems} item{totalItems > 1 ? "s" : ""}</span>
        <span>Total: ₹{grandTotal}</span>
      </div>
      <div className="cart-actions">
        <button
          className="checkout-btn"
          onClick={handleCheckout}
        >
          Checkout
        </button>
        <button className="clear-cart-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default MiniCartBar;