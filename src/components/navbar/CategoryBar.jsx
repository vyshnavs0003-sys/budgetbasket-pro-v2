import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CategoryBar.css';

const CategoryBar = ({ onBudgetClick }) => {  
  const [showDropdown, setShowDropdown] = useState(false);

  const categories = [
    { name: 'Fruits & Vegetables' },
    { name: 'Dairy & Bakery' },
    { name: 'Grocery & Staples' },
    { name: 'Snacks & Branded Food' },
    { name: 'Personal Care' },
    { name: 'Home Care' },
  ];

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');

  return (
    <div className="categorybar desktop-only">
      <div className="container d-flex justify-content-between align-items-center container-cat">
        {/* Left - Categories Dropdown */}
        <div
          className="category-left"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button
            type="button"
            className="category-trigger"
            aria-expanded={showDropdown}
            aria-haspopup="true"
          >
            ☰ Categories
          </button>

          {showDropdown && (
            <div className="category-dropdown">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  to={`/category/${slugify(category.name)}`}
                  className="dropdown-item"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Right - Navigation Links */}
        <div className="category-right">
          <button onClick={onBudgetClick} className="category-link-btn">
            Monthly Planner
          </button>
          <Link to="/my-orders">My Orders</Link>
          <Link to="/my-profile">My Profile</Link>
          <Link to="/offers">Offers</Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;