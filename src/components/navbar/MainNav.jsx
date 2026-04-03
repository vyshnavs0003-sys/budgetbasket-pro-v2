import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa';
import './MainNav.css';
import logoImg from '../../assets/icons/logo-text.png';
import { useCart } from '../../context/CartContext';

const MainNav = ({ onMenuClick, onCartClick, onBudgetClick }) => {  
  const { cartCount, itemsTotal } = useCart();
  const monthlyBudget = useSelector((state) => state.budget.monthlyBudget);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const remaining = monthlyBudget - itemsTotal;

  // Determine badge class based on remaining budget
  let badgeClass = 'remaining-badge';
  if (remaining <= 0) {
    badgeClass += ' remaining-danger';
  } else if (remaining <= monthlyBudget * 0.2) {
    badgeClass += ' remaining-warning';
  } else {
    badgeClass += ' remaining-safe';
  }

  const handleSearch = () => {
    const trimmedSearch = searchTerm.trim();
    if (!trimmedSearch) return;
    navigate(`/category/search?q=${encodeURIComponent(trimmedSearch)}`);
    setSearchTerm('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <>
      <nav className="mainnav">
        <div className="container">
          <div className="mainnav-container">
            <button className="hamburger-btn mobile-only" onClick={onMenuClick}>
              <FaBars className="hamburger-icon" />
            </button>

            <Link to="/" className="logo-container">
              <img src={logoImg} alt="BudgetBasket" className="logo-image" />
            </Link>

            <div className="search-box desktop-only">
              <input
                type="text"
                placeholder="Search products..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button className="search-btn" onClick={handleSearch}>Search</button>
            </div>

            <div className="right-section">
              <button className="cart-section" onClick={onCartClick}>
                <FaShoppingCart size={22} />
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </button>

              <button onClick={onBudgetClick} className={badgeClass}>
                ₹ {remaining < 0 ? 0 : remaining} Remaining
              </button>
            </div>
          </div>

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

      <button onClick={onBudgetClick} className={`floating-budget ${badgeClass}`}>
        ₹ {remaining < 0 ? 0 : remaining} Left
      </button>
    </>
  );
};

export default MainNav;