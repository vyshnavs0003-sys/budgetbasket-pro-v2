import React from "react";
import HeroBanner from "../components/ui/home-ui/HeroBanner";
import HowItWorks from "../components/ui/home-ui/HowItWorks";
import CategoryCard from '../components/ui/CategoryCard';


import groceryImg from '../assets/images/grocery.jpg';
import fruitsImg from '../assets/images/fruits-veg.jpg';
import dairyImg from '../assets/images/dairy.jpg';
import snacksImg from '../assets/images/snaks.jpg';
import drinksImg from '../assets/images/drinks.jpg';
import homeCareImg from '../assets/images/home-care.jpg';
import personalCareImg from '../assets/images/personal-care.jpg';
import babyCareImg from '../assets/images/baby-care.jpg';

const Home = () => {
  const categories = [
    {
      name: "Grocery & Staples",
      image: groceryImg,
      itemCount: 45,
      link: "/category/grocery-and-staples",
    },
    {
      name: "Fruits & Vegetables",
      image: fruitsImg,
      itemCount: 38,
      link: "/category/fruits-and-vegetables",
    },
    {
      name: "Dairy & Bakery",
      image: dairyImg,
      itemCount: 32,
      link: "/category/dairy-and-bakery",
    },
    {
      name: "Snacks & Branded Food",
      image: snacksImg,
      itemCount: 56,
      link: "/category/snacks-and-branded-food",
    },
    {
      name: "Drinks & Beverages",
      image: drinksImg,
      itemCount: 28,
      link: "/category/drinks-and-beverages",
    },
    {
      name: "Home Care",
      image: homeCareImg,
      itemCount: 24,
      link: "/category/home-care",
    },
    {
      name: "Personal Care",
      image: personalCareImg,
      itemCount: 36,
      link: "/category/personal-care",
    },
    {
      name: "Baby Care",
      image: babyCareImg,
      itemCount: 18,
      link: "/category/baby-care",
    },
  ];

  return (
    <div>
      {/* Hero Banner Section */}
      <HeroBanner />

      {/* Categories Section */}
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="app-section-title">Shop by Category</h2>
            </div>
          </div>

          <div className="row">
            {categories.map((category, idx) => (
              <div key={idx} className="col-md-3 col-6 mb-4">
                <CategoryCard
                  name={category.name}
                  image={category.image}
                  itemCount={category.itemCount}
                  link={category.link}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />
    </div>
  );
};

export default Home;