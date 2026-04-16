import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaBolt, FaFire, FaClock } from 'react-icons/fa';
import ProductCard from './ProductCard';
import './DailyOffer.css';

const DailyOffer = () => {
  const { items: products } = useSelector((state) => state.products);
  const { offers, discountPercent } = useSelector((state) => state.offers);
  const [timeLeft, setTimeLeft] = useState('');

  const offerProducts = products.filter(product => offers.includes(product.id));

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const diff = midnight - now;
      
      if (diff <= 0) {
        setTimeLeft('Expired');
        return;
      }
      
      const hours = Math.floor(diff / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  if (offerProducts.length === 0) return null;

  return (
    <section className="daily-offer-section">
      <div className="daily-offer-bg-overlay"></div>
      <div className="container">
        <div className="daily-offer-header">
          <div className="offer-badge-floating">
            <FaBolt className="badge-icon" />
            <span>LIMITED TIME</span>
          </div>
          
          <h2 className="daily-offer-title">
            <FaFire className="title-icon" />
            Daily Specials
            <span className="title-extra"> Extra {discountPercent}% OFF</span>
          </h2>
          
          <p className="daily-offer-subtitle">
            Stacked on existing discounts – today only
          </p>
          
          <div className="offer-timer">
            <FaClock className="timer-icon" />
            <span className="timer-label">Ends in:</span>
            <span className="timer-value">{timeLeft}</span>
          </div>
        </div>

        <div className="daily-offer-slider">
          {offerProducts.map(product => (
            <div key={product.id} className="daily-offer-item">
              <div className="offer-card-glow"></div>
              <ProductCard product={product} isOfferProduct={true} />
            </div>
          ))}
        </div>

        <div className="daily-offer-footer">
          <button className="view-all-offers-btn" onClick={() => window.location.href = '/offers'}>
            View All Offers →
          </button>
        </div>
      </div>
    </section>
  );
};

export default DailyOffer;