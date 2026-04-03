import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openAuthModal } from '../../redux/authSlice';
import './TopBar.css';

const TopBar = () => {
  const dispatch = useDispatch();

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

          {/* Login button */}
          <button 
            onClick={() => dispatch(openAuthModal())} 
            className="top-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Login
          </button>

          {/* Register button */}
          <button 
            onClick={() => dispatch(openAuthModal())} 
            className="top-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;