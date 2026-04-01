import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroBanner from '../components/ui/home-ui/HeroBanner';
import CategoryCard from '../components/ui/CategoryCard';
import MyBasket from '../components/ui/MyBasket';
import HowItWorks from '../components/ui/home-ui/HowItWorks';
import ProductsCard from '../components/ui/ProductCard';

import groceryImg from '../assets/images/grocery.jpg';
import fruitsImg from '../assets/images/fruits-veg.jpg';
import dairyImg from '../assets/images/dairy.jpg';
import snacksImg from '../assets/images/snaks.jpg';
import drinksImg from '../assets/images/drinks.jpg';
import homeCareImg from '../assets/images/home-care.jpg';
import personalCareImg from '../assets/images/personal-care.jpg';
import babyCareImg from '../assets/images/baby-care.jpg';
import './Home.css';

import { products as allProducts } from '../data/products';

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const categories = [
    {
      name: 'Grocery & Staples',
      categoryId: 'grocery-and-staples',
      image: groceryImg,
    },
    {
      name: 'Fruits & Vegetables',
      categoryId: 'fruits-and-vegetables',
      image: fruitsImg,
    },
    {
      name: 'Dairy & Bakery',
      categoryId: 'dairy-and-bakery',
      image: dairyImg,
    },
    {
      name: 'Snacks & Branded Food',
      categoryId: 'snacks-and-branded-food',
      image: snacksImg,
    },
    {
      name: 'Drinks & Beverages',
      categoryId: 'drinks-and-beverages',
      image: drinksImg,
    },
    {
      name: 'Home Care',
      categoryId: 'home-care',
      image: homeCareImg,
    },
    {
      name: 'Personal Care',
      categoryId: 'personal-care',
      image: personalCareImg,
    },
    {
      name: 'Baby Care',
      categoryId: 'baby-care',
      image: babyCareImg,
    },
  ];

  useEffect(() => {
    setProducts(allProducts);
  }, []);

  const getProductsByCategory = (categoryName) => {
    return products.filter((p) => p.category === categoryName).slice(0, 5);
  };

  const getItemCountByCategory = (categoryId) => {
    return products.filter((p) => p.categoryId === categoryId).length;
  };

  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Categories + MyBasket Section */}
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="app-section-title">Shop by Category</h2>

              {/* First row of 4 categories */}
              <div className="row">
                {categories.slice(0, 4).map((category, idx) => (
                  <div key={idx} className="col-md-3 col-6 mb-4">
                    <CategoryCard
                      name={category.name}
                      image={category.image}
                      itemCount={getItemCountByCategory(category.categoryId)}
                      categoryId={category.categoryId}
                    />
                  </div>
                ))}
              </div>

              {/* Second row of 4 categories */}
              <div className="row">
                {categories.slice(4, 8).map((category, idx) => (
                  <div key={idx + 4} className="col-md-3 col-6 mb-4">
                    <CategoryCard
                      name={category.name}
                      image={category.image}
                      itemCount={getItemCountByCategory(category.categoryId)}
                      categoryId={category.categoryId}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-4">
              <MyBasket />
            </div>
          </div>
        </div>
      </section>

      {/* Product Rows */}
      {categories.map((category) => {
        const categoryProducts = getProductsByCategory(category.name);
        if (categoryProducts.length === 0) return null;

        return (
          <section key={category.categoryId} className="category-row py-4">
            <div className="container">
              <h2 className="app-section-title mb-4">{category.name}</h2>

              <div className="row">
                {categoryProducts.map((product) => (
                  <div key={product.id} className="col-lg-2 col-md-3 col-6 mb-3">
                    <ProductsCard product={product} />
                  </div>
                ))}
              </div>

              <div className="text-center mt-3">
                <button
                  className="view-all-btn"
                  onClick={() => navigate(`/category/${category.categoryId}`)}
                  type="button"
                >
                  View All {category.name} →
                </button>
              </div>
            </div>
          </section>
        );
      })}

      {/* How It Works */}
      <HowItWorks />
    </div>
  );
};

export default Home;