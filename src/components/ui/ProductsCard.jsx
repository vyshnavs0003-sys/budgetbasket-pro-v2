import React from 'react';
import './ProductsCard.css';

const ProductCard = ({ product }) => {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="price-section">
          <span className="current-price">₹{product.price}</span>
          <span className="original-price">₹{product.originalPrice}</span>
          <span className="discount">{discount}% OFF</span>
        </div>

        <p className="product-unit">{product.unit}</p>
        <button className="add-btn">Add</button>
      </div>
    </div>
  );
};

export default ProductCard;