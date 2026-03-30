import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa';
import './MainNav.css';
import logoImg from '../../assets/icons/logo-text.png';

const MainNav = ({
  cartCount = 2,
  remainingBudget = 1200,
  onMenuClick,
}) => {
  return (
    <>
      <nav className="mainnav">
        <div className="container">
          {/* Top Row */}
          <div className="mainnav-container">
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

            {/* Desktop Search Box */}
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
              <Link to="/cart" className="cart-section" aria-label="Go to cart">
                <FaShoppingCart size={22} />
                <span className="cart-badge">{cartCount}</span>
              </Link>

              {/* Desktop only remaining badge */}
              <Link to="/monthly-planner" className="remaining-badge desktop-only">
                ₹ {remainingBudget} Remaining
              </Link>
            </div>
          </div>

          {/* Mobile Search Row */}
          <div className="mobile-search-row mobile-only">
            <div className="mobile-search-wrapper">
              <FaSearch className="mobile-search-icon" />
              <input
                type="text"
                placeholder="Search for products..."
                className="mobile-search-input"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Floating Budget Badge */}
      <Link to="/monthly-planner" className="floating-budget mobile-only">
        ₹ {remainingBudget} Left
      </Link>
    </>
  );
};

export default MainNav;