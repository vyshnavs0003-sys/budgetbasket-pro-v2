import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaThLarge, FaShoppingCart, FaUser } from 'react-icons/fa';
import './BottomNav.css';
import { useCart } from '../../context/CartContext';

const BottomNav = ({ onMenuClick, onCategoryClick, onCartClick }) => {
  const location = useLocation();
  const { cartCount } = useCart();

  return (
    <div className="bottom-nav mobile-only">
      {/* Menu Button */}
      <button
        className={`bottom-nav-item ${location.pathname === '/' ? 'active' : ''}`}
        onClick={onMenuClick}
        type="button"
      >
        <FaBars className="bottom-nav-icon" />
        <span>Menu</span>
      </button>

      {/* Category Button */}
      <button
        className="bottom-nav-item"
        onClick={onCategoryClick}
        type="button"
      >
        <FaThLarge className="bottom-nav-icon" />
        <span>Category</span>
      </button>

      {/* Cart Button */}
      <button
        className="bottom-nav-item"
        onClick={onCartClick}
        type="button"
      >
        <div className="bottom-nav-icon-wrapper">
          <FaShoppingCart className="bottom-nav-icon" />
          {cartCount > 0 && (
            <span className="bottom-cart-badge">{cartCount}</span>
          )}
        </div>
        <span>Cart {cartCount > 0 ? `(${cartCount})` : ''}</span>
      </button>

      {/* Account Link */}
      <Link to="/my-profile" className="bottom-nav-item">
        <FaUser className="bottom-nav-icon" />
        <span>Account</span>
      </Link>
    </div>
  );
};

export default BottomNav;