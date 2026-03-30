import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import './HamburgerSidebar.css';

const HamburgerSidebar = ({ isOpen, onClose }) => {
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
    { name: 'Monthly Planner', path: '/monthly-planner' },
    { name: 'My Profile', path: '/my-profile' },
    { name: 'My Orders', path: '/my-orders' },
    { name: 'Offers', path: '/offers' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Login', path: '#' },
    { name: 'Register', path: '#' },
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

  return (
    <>
      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="sidebar-header">
          <span>Menu</span>
          <FaTimes className="close-sidebar" onClick={onClose} />
        </div>

        {showCategories ? (
          <>
            {/* Submenu Header */}
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
          </div>
        )}
      </div>
    </>
  );
};

export default HamburgerSidebar;