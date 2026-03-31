import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HowItWorks.css';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(null);
  const navigate = useNavigate();

  const steps = [
    {
      id: 1,
      icon: 'fa-solid fa-chart-pie',
      title: 'Monthly Budget',
      description: 'Set your spending limit',
      details: 'Track expenses & avoid overspending'
    },
    {
      id: 2,
      icon: 'fa-solid fa-cart-shopping',
      title: 'Order Online',
      description: 'Browse thousands of products',
      details: 'Add items to cart & checkout securely'
    },
    {
      id: 3,
      icon: 'fa-solid fa-box-open',
      title: 'Smart Picking',
      description: 'Fresh items from nearest stores',
      details: 'Quality checked before packing'
    },
    {
      id: 4,
      icon: 'fa-solid fa-truck-fast',
      title: 'Express Delivery',
      description: 'Get everything at your doorstep',
      details: 'Track your order in real-time'
    }
  ];

  const handleShopNow = () => {
    navigate('/category/grocery-and-staples');
  };

  return (
    <div className="how-it-works-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Simple Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-description">
            Fresh groceries in 4 simple steps
          </p>
        </div>

        <div className="row g-2 g-md-4 steps-row mt-5">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="col-3 col-md-3"
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className={`step-wrapper ${activeStep === index ? 'active' : ''}`}>
                {index < steps.length - 1 && (
                  <div className="step-connector d-none d-md-block">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                )}

                <div className="step-card">
                  <div className="step-icon-wrapper">
                    <div className="step-number">{step.id}</div>
                    <i className={`${step.icon} step-icon`}></i>
                  </div>

                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description d-none d-md-block">{step.description}</p>

                  <div className="step-hover-details d-none d-md-block">
                    <p>{step.details}</p>
                    <i className="fa-solid fa-check-circle"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-3 mt-md-5">
          <button
            className="how-it-works-btn"
            onClick={handleShopNow}
          >
            Start Shopping <i className="fa-solid fa-arrow-right ms-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;