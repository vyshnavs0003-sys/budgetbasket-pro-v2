import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  
import "./FlashSaleBanner.css";

const FlashSaleBanner = () => {
  const navigate = useNavigate();  

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const end = new Date();
    end.setHours(end.getHours() + 3);

    const updateTimer = () => {
      const now = new Date();
      const diff = end - now;

      if (diff <= 0) {
        setTimeLeft("Ended");
        return;
      }

      const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
      const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
      const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");

      setTimeLeft(`${h}h ${m}m ${s}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleShopNow = () => {
    navigate('/category/baby-care');  
  };

  return (
    <div className="flash-banner">
      <div className="flash-banner-content">
        <p className="flash-tagline">Gentle care for your little bundle of joy</p>

        <h1 className="flash-title">
          Flash Sale on <br />
          <span>Baby Care</span>
        </h1>

        <p className="flash-subtitle">
          Up to 60% off on diapers, wipes, lotions & more
        </p>

        <button className="flash-btn" onClick={handleShopNow}>SHOP NOW</button>

        <div className="flash-timer">
          <span>Ends in:</span>
          <strong>{timeLeft}</strong>
        </div>
      </div>

      <div className="flash-banner-image" />
    </div>
  );
};

export default FlashSaleBanner;