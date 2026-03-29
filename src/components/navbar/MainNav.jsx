import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa';
import './MainNav.css';
import logoImg from '../../assets/icons/logo-text.png';

const MainNav = ({
  cartCount = 2,
  remainingBudget = 1200,
  onSearchClick,
  onMenuClick,
}) => {
  return (
    <nav className="mainnav">
      <div className="container mainnav-container">
        {/* Hamburger Icon (mobile only) */}
        <button
          className="hamburger-btn mobile-only"
          onClick={onMenuClick}
          aria-label="Open menu"
          type="button"
        >
          <FaBars className="hamburger-icon" />
        </button>

        {/* Logo */}
        <Link to="/" className="logo-container">
          <img src={logoImg} alt="BudgetBasket" className="logo-image" />
        </Link>

        {/* Search Box */}
        <div className="search-box desktop-only">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
          />
          <button className="search-btn" type="button">
            Search
          </button>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <button
            className="search-icon-btn mobile-only"
            onClick={onSearchClick}
            aria-label="Open search"
            type="button"
          >
            <FaSearch className="search-icon" />
          </button>

          <Link to="/cart" className="cart-section" aria-label="Go to cart">
            <FaShoppingCart size={22} />
            <span className="cart-badge">{cartCount}</span>
          </Link>

          {/* Remaining budget clickable */}
          <Link to="/monthly-planner" className="remaining-badge desktop-only">
            ₹ {remainingBudget} Remaining
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;