import { Link } from 'react-router-dom';
import { FaClock, FaBoxOpen, FaTags } from 'react-icons/fa';
import './HeroBanner.css';
import heroMan from '../../../assets/images/hero-man-01.png';

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="app-container">
        <div className="hero-banner-wrapper">
          {/* Left Content */}
          <div className="hero-content">
            <h1 className="hero-title">
              Fresh groceries,
              <span> delivered in minutes</span>
            </h1>

            <p className="hero-description">
              Get farm-fresh fruits, vegetables, dairy and daily essentials at the best prices.
            </p>

            <div className="hero-actions">
              <Link to="/category" className="hero-btn hero-btn-primary">
                Shop Now
              </Link>

              <Link to="/offers" className="hero-btn hero-btn-secondary">
                View Offers
              </Link>
            </div>

            <div className="hero-features">
              <div className="hero-feature-item">
                <FaClock className="hero-feature-icon" />
                <span>10 min delivery</span>
              </div>

              <div className="hero-feature-item">
                <FaBoxOpen className="hero-feature-icon" />
                <span>Fresh produce</span>
              </div>

              <div className="hero-feature-item">
                <FaTags className="hero-feature-icon" />
                <span>Best deals</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-image-section">
            
            <img
              src={heroMan}
              alt="Fresh grocery delivery"
              className="hero-main-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;