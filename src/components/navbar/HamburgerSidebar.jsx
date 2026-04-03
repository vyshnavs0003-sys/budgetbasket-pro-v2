import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { openAuthModal } from '../../redux/authSlice';
import './HamburgerSidebar.css';

const HamburgerSidebar = ({ isOpen, onClose, onBudgetClick }) => {  
  const dispatch = useDispatch();
  const [showCategories, setShowCategories] = useState(false);

  const categories = [
    'Fruits & Vegetables',
    'Dairy & Bakery',
    'Grocery & Staples',
    'Snacks & Branded Food',
    'Personal Care',
    'Home Care',
  ];

  
  const menuItems = [
    { name: 'My Profile', path: '/my-profile' },
    { name: 'My Orders', path: '/my-orders' },
    { name: 'Offers', path: '/offers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');

  const handleCategoryClick = () => setShowCategories(true);
  const handleBackClick = () => setShowCategories(false);
  const handleItemClick = () => onClose();

  const handleAuthClick = () => {
    onClose();
    dispatch(openAuthModal());
  };

  const handleBudgetClick = () => {
    onClose();          
    onBudgetClick();    
  };

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>

      <div className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <span>Menu</span>
          <FaTimes className="close-sidebar" onClick={onClose} />
        </div>

        {showCategories ? (
          <>
            <div className="submenu-header">
              <FaChevronLeft onClick={handleBackClick} style={{ cursor: 'pointer' }} />
              <span>Categories</span>
            </div>
            <div className="sidebar-submenu">
              {categories.map((category, idx) => (
                <Link
                  key={idx}
                  to={`/category/${slugify(category)}`}
                  className="submenu-item"
                  onClick={handleItemClick}
                >
                  {category}
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="sidebar-main">
            <div className="sidebar-item" onClick={handleCategoryClick}>
              <span>Categories</span>
              <FaChevronRight className="arrow" />
            </div>

            <button
              className="sidebar-item"
              onClick={handleBudgetClick}
              style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <span>Monthly Planner</span>
              <FaChevronRight className="arrow" />
            </button>

            {/* Other menu items (links) */}
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="sidebar-item"
                onClick={handleItemClick}
              >
                <span>{item.name}</span>
                <FaChevronRight className="arrow" />
              </Link>
            ))}

            {/* Login and Register buttons */}
            <button
              className="sidebar-item"
              onClick={handleAuthClick}
              style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <span>Login</span>
              <FaChevronRight className="arrow" />
            </button>
            <button
              className="sidebar-item"
              onClick={handleAuthClick}
              style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <span>Register</span>
              <FaChevronRight className="arrow" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default HamburgerSidebar;