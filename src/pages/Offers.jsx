import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ui/ProductCard';
import { FaGift, FaTruck, FaPercent, FaUsers, FaBolt, FaClock } from 'react-icons/fa';
import './Offers.css';

const Offers = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const { offers, discountPercent } = useSelector((state) => state.offers);

  const offerProducts = products.filter((p) => offers.includes(p.id));

  // Countdown to next midnight (offers reset)
  const [timeLeft, setTimeLeft] = useState('');
  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const diff = midnight - now;
      if (diff <= 0) return setTimeLeft('Expired');
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft(`${h}h ${m}m ${s}s`);
    };
    calc();
    const timer = setInterval(calc, 1000);
    return () => clearInterval(timer);
  }, []);

  // Flash sale timer (example: 3 hours)
  const [flashTime, setFlashTime] = useState('');
  useEffect(() => {
    const end = new Date();
    end.setHours(end.getHours() + 3);
    const calcFlash = () => {
      const now = new Date();
      const diff = end - now;
      if (diff <= 0) return setFlashTime('Ended');
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setFlashTime(`${h}h ${m}m ${s}s`);
    };
    calcFlash();
    const timer = setInterval(calcFlash, 1000);
    return () => clearInterval(timer);
  }, []);

  const creativeOffers = [
    {
      id: 1,
      title: 'First Order Special',
      description: 'Get 50% OFF up to ₹150',
      code: 'WELCOME50',
      bg: 'linear-gradient(135deg, #ff6b6b, #f06548)',
      icon: <FaGift />,
    },
    {
      id: 2,
      title: 'Free Delivery Zone',
      description: 'On all orders above ₹499',
      code: 'FREESHIP',
      bg: 'linear-gradient(135deg, #20bf6b, #0b8f4c)',
      icon: <FaTruck />,
    },
    {
      id: 3,
      title: 'Bulk Saver',
      description: 'Extra 10% off on 3+ items',
      code: 'BULK10',
      bg: 'linear-gradient(135deg, #4b7bec, #3867d6)',
      icon: <FaPercent />,
    },
    {
      id: 4,
      title: 'Refer & Earn',
      description: 'Get ₹100 credit per referral',
      code: 'REFER100',
      bg: 'linear-gradient(135deg, #a55eea, #8854d0)',
      icon: <FaUsers />,
    },
    {
      id: 5,
      title: 'Flash Sale',
      description: 'Up to 60% off on selected items',
      code: 'FLASH60',
      bg: 'linear-gradient(135deg, #fd9644, #fa8231)',
      icon: <FaBolt />,
    },
  ];

  if (status === 'loading') return <div className="offers-loading">Loading offers...</div>;
  if (status === 'failed') return <div className="offers-error">Failed to load offers. Please refresh.</div>;

  return (
    <div className="offers-page">
      <div className="container">
        {/* Hero Section */}
        <div className="offers-hero">
          <div className="offers-hero-content">
            <span className="hero-badge">Limited Time</span>
            <h1>Daily Specials & Exclusive Deals</h1>
            <p>Extra {discountPercent}% off on selected products – refreshed every 24 hours</p>
            <div className="hero-timer">
              <FaClock className="timer-icon" />
              <span>Next refresh in: </span>
              <strong>{timeLeft}</strong>
            </div>
          </div>
          <div className="offers-hero-illustration">
            <div className="pulse-circle"></div>
            <div className="pulse-circle delay"></div>
          </div>
        </div>

        {/* Creative Offer Cards */}
        <div className="offers-grid">
          {creativeOffers.map((offer) => (
            <div key={offer.id} className="offer-card" style={{ background: offer.bg }}>
              <div className="offer-icon">{offer.icon}</div>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <div className="offer-code">Code: {offer.code}</div>
            </div>
          ))}
        </div>

        {/* Flash Sale Banner */}
        <div className="flash-sale-banner">
          <div className="flash-sale-left">
            <FaBolt className="flash-icon" />
            <div>
              <h2>Flash Sale</h2>
              <p>Up to 60% off + extra 10% on checkout</p>
            </div>
          </div>
          <div className="flash-sale-timer">
            <span>Ends in: </span>
            <strong>{flashTime}</strong>
          </div>
        </div>

        {/* Daily Specials Products */}
        {offerProducts.length > 0 ? (
          <div className="daily-specials">
            <div className="section-header">
              <h2>Today's Picks – Extra {discountPercent}% OFF</h2>
              <p>Already applied on top of existing discounts</p>
            </div>
            <div className="products-grid">
              {offerProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ) : (
          <div className="no-offers-card">
            <p>No daily offers at the moment. Check back tomorrow.</p>
          </div>
        )}

        <div className="offers-footer-note">
          <small>Offers are subject to terms and conditions. Daily specials refresh at midnight.</small>
        </div>
      </div>
    </div>
  );
};

export default Offers;