import { Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="topbar-left">
          <span className="topbar-email">info@budgetbasket.com</span>
        </div>

        
        <div className="topbar-right d-flex align-items-center gap-3">
          <select className="location-select">
            <option>Kozhikode</option>
            <option>Mankavu</option>
            <option>Vellimadukunnu</option>
            <option>Chevayoor</option>
            <option>West Hill</option>
            <option>Palazhi</option>
          </select>

          <Link to="/contact" className="top-link">Contact</Link>
          <span className="top-link">Login</span>
          <span className="top-link">Register</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;