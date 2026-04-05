import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeroBanner from '../components/ui/home-ui/HeroBanner';
import CategoryCard from '../components/ui/CategoryCard';
import MyBasket from '../components/ui/MyBasket';
import HowItWorks from '../components/ui/home-ui/HowItWorks';
import ProductsCard from '../components/ui/ProductCard';
import DailyOffer from '../components/ui/DailyOffer';

import groceryImg from '../assets/images/grocery.jpg';
import fruitsImg from '../assets/images/fruits-veg.jpg';
import dairyImg from '../assets/images/dairy.jpg';
import snacksImg from '../assets/images/snaks.jpg';
import drinksImg from '../assets/images/drinks.jpg';
import homeCareImg from '../assets/images/home-care.jpg';
import personalCareImg from '../assets/images/personal-care.jpg';
import babyCareImg from '../assets/images/baby-care.jpg';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const { items: products, status } = useSelector((state) => state.products);

  const categories = [
    { name: 'Grocery & Staples', categoryId: 'grocery-and-staples', image: groceryImg },
    { name: 'Fruits & Vegetables', categoryId: 'fruits-and-vegetables', image: fruitsImg },
    { name: 'Dairy & Bakery', categoryId: 'dairy-and-bakery', image: dairyImg },
    { name: 'Snacks & Branded Food', categoryId: 'snacks-and-branded-food', image: snacksImg },
    { name: 'Drinks & Beverages', categoryId: 'drinks-and-beverages', image: drinksImg },
    { name: 'Home Care', categoryId: 'home-care', image: homeCareImg },
    { name: 'Personal Care', categoryId: 'personal-care', image: personalCareImg },
    { name: 'Baby Care', categoryId: 'baby-care', image: babyCareImg },
  ];

  const getProductsByCategory = (categoryName) => {
    return products.filter((p) => p.category === categoryName).slice(0, 6);
  };

  const getItemCountByCategory = (categoryId) => {
    return products.filter((p) => p.categoryId === categoryId).length;
  };

  // Show loading state while products are being fetched
  if (status === 'loading') {
    return <div className="text-center py-5">Loading products...</div>;
  }

  if (status === 'failed') {
    return <div className="text-center py-5 text-danger">Failed to load products. Please refresh.</div>;
  }

  return (
    <div>
      <HeroBanner />

      

      {/* Categories + MyBasket Section */}
      <section className="home-categories-section">
        <div className="container">
          <div className="home-layout">
            <div className="home-categories">
              <h2 className="app-section-title">Shop by Category</h2>
              <div className="categories-grid">
                {categories.map((category, idx) => (
                  <div key={idx} className="category-card-wrapper">
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
            <div className="home-basket">
              <MyBasket />
            </div>
          </div>
        </div>
      </section>

      {/* Daily Offer Banner */}
      <DailyOffer />

      {/* Product Rows */}
      {categories.map((category) => {
        const categoryProducts = getProductsByCategory(category.name);
        if (categoryProducts.length === 0) return null;

        return (
          <section key={category.categoryId} className="home-product-row">
            <div className="container">
              <h2 className="app-section-title mb-4">{category.name}</h2>
              <div className="product-row-scroll">
                {categoryProducts.map((product) => (
                  <div key={product.id} className="product-card-wrapper">
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

      <HowItWorks />
    </div>
  );
};

export default Home;