import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="section about-hero">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6 mb-4 mb-lg-0 fade-in">
              <h1>Your Smart Grocery Partner</h1>
              <p className="app-text-muted">
                Helping you shop smarter, save more, and stay within budget — every month.
              </p>
            </div>

            <div className="col-lg-6 fade-in">
              <img 
                src="src\assets\images\about-hero1.jpg" 
                alt="About"
                className="img-fluid app-radius-xl app-shadow-md"
              />
            </div>

          </div>
        </div>
      </section>


      {/* OUR STORY */}
      <section className="section app-bg-light">
        <div className="container">

          <h2 className="app-section-title center">Our Story</h2>

          <div className="row mt-5">

            <div className="col-md-6 mb-4">
              <div className="app-card hover-glow fade-in h-100">
                <h3>Who We Are</h3>
                <p className="app-text-muted">
                  We are a passionate team of developers, designers, and grocery enthusiasts
                  building smarter shopping solutions for modern households.
                </p>
                <p className="app-text-muted">
                  Our experience in tech and retail helps us deliver a seamless,
                  budget-friendly grocery experience.
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="app-card hover-glow fade-in h-100">
                <h3>What We Do</h3>
                <p className="app-text-muted">
                  We connect you with local stores and help track your monthly grocery
                  spending with smart budgeting tools.
                </p>
                <p className="app-text-muted">
                  Our platform ensures you never overspend while still getting quality
                  groceries delivered to your doorstep.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* MISSION & VISION */}
      <section className="section">
        <div className="container">
          <div className="row">

            <div className="col-md-6 mb-4">
              <div className="app-card text-center hover-glow fade-in h-100">
                <div className="icon-circle mb-3">
                  <i className="fa-solid fa-bullseye icon-primary"></i>
                </div>
                <h3>Our Mission</h3>
                <p className="app-text-muted">
                  To simplify grocery shopping by combining convenience with intelligent
                  budget management for every household.
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="app-card text-center hover-glow fade-in h-100">
                <div className="icon-circle mb-3">
                  <i className="fa-solid fa-eye icon-primary"></i>
                </div>
                <h3>Our Vision</h3>
                <p className="app-text-muted">
                  To become India’s most trusted grocery platform focused on financial
                  well-being and smart shopping.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* VALUES */}
      <section className="section app-bg-light">
        <div className="container">

          <h2 className="app-section-title center">Our Core Values</h2>

          <div className="row mt-5">

            <div className="col-md-4 mb-4">
              <div className="app-card text-center hover-glow fade-in h-100">
                <i className="fa-solid fa-heart icon-primary mb-3"></i>
                <h3>Quality First</h3>
                <p className="app-text-muted small">
                  We ensure every product meets high-quality standards before reaching you.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="app-card text-center hover-glow fade-in h-100">
                <i className="fa-solid fa-hand-holding-heart icon-primary mb-3"></i>
                <h3>Customer Trust</h3>
                <p className="app-text-muted small">
                  Transparency and reliability are at the core of everything we do.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="app-card text-center hover-glow fade-in h-100">
                <i className="fa-solid fa-leaf icon-primary mb-3"></i>
                <h3>Sustainability</h3>
                <p className="app-text-muted small">
                  We promote eco-friendly practices and support local farmers.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* STATS */}
      <section className="section stats">
        <div className="container">
          <div className="row text-center">

            <div className="col-md-3 col-6 mb-4">
              <h3 className="app-text-primary">5000+</h3>
              <p className="app-text-muted">Happy Customers</p>
            </div>

            <div className="col-md-3 col-6 mb-4">
              <h3 className="app-text-primary">50+</h3>
              <p className="app-text-muted">Store Partners</p>
            </div>

            <div className="col-md-3 col-6 mb-4">
              <h3 className="app-text-primary">1000+</h3>
              <p className="app-text-muted">Products</p>
            </div>

            <div className="col-md-3 col-6 mb-4">
              <h3 className="app-text-primary">24/7</h3>
              <p className="app-text-muted">Support</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;