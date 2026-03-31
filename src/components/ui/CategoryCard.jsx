import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.css';

const CategoryCard = ({ name, image, itemCount, link }) => {
  return (
    <Link to={link} className="category-card">
      <div className="category-image">
        <img src={image} alt={name} />
      </div>
      <h3 className="category-name">{name}</h3>
      <p className="category-items">{itemCount}+ items</p>
    </Link>
  );
};

export default CategoryCard;