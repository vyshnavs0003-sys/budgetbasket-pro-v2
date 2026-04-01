import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa';
import './MainNav.css';
import logoImg from '../../assets/icons/logo-text.png';
import { useCart } from '../../context/CartContext';

const MainNav = ({ remainingBudget = 1200, onMenuClick, onCartClick }) => {
  const { cartCount } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmedSearch = searchTerm.trim();

    if (!trimmedSearch) return;

    navigate(`/category/search?q=${encodeURIComponent(trimmedSearch)}`);
    setSearchTerm('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button className="search-btn" type="button" onClick={handleSearch}>
                Search
              </button>
            </div>

            {/* Right Section */}
            <div className="right-section">
              <button
                className="cart-section"
                aria-label="Open cart"
                type="button"
                onClick={onCartClick}
              >
                <FaShoppingCart size={22} />
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </button>

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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
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