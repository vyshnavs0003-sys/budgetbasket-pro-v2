import { Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="topbar-left">
          <a href="mailto:info@budgetbasket.com" className="topbar-email">
            info@budgetbasket.com
          </a>
        </div>

        <div className="topbar-right d-flex align-items-center gap-3">
          <select className="location-select" aria-label="Select location">
            <option>Kozhikode</option>
            <option>Mankavu</option>
            <option>Vellimadukunnu</option>
            <option>Chevayoor</option>
            <option>West Hill</option>
            <option>Palazhi</option>
          </select>

          <Link to="/contact" className="top-link">Contact</Link>
          <Link to="/login" className="top-link">Login</Link>
          <Link to="/register" className="top-link">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;