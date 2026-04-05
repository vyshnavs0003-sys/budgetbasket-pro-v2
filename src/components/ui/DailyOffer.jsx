import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import './DailyOffer.css';

const DailyOffer = () => {
  const { items: products } = useSelector((state) => state.products);
  const { offers, discountPercent } = useSelector((state) => state.offers);
  
 
  const offerProducts = products.filter(product => offers.includes(product.id));
  
  if (offerProducts.length === 0) return null;
  
  return (
    <section className="daily-offer-section">
      <div className="container">
        <h2 className="app-section-title">
          Daily Offers – {discountPercent}% OFF
        </h2>
        <div className="daily-offer-slider">
          {offerProducts.map(product => (
            <div key={product.id} className="daily-offer-item">
              <ProductCard product={product} isOfferProduct={true} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyOffer;