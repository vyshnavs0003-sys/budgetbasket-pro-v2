import React from "react";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="terms-page">

      {/* HERO */}
      <section className="app-section app-hero text-center">
        <div className="app-container">
          <h1 className="app-heading">Terms & Conditions</h1>
          <p className="app-subtext">
            Please read these terms carefully before using Budget Basket.
          </p>
          <p className="app-meta">Last Updated: March 15, 2024</p>
        </div>
      </section>


      {/* CONTENT */}
      <section className="app-section">
        <div className="app-container app-container-sm">

          {/* 1 */}
          <div className="terms-section app-card">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Budget Basket, you agree to be bound by these Terms & Conditions.
              If you do not agree, please do not use our services.
            </p>
          </div>

          {/* 2 */}
          <div className="terms-section app-card">
            <h2>2. Use of Our Services</h2>
            <p>You agree to use our platform responsibly and lawfully.</p>

            <h3>Restrictions:</h3>
            <ul>
              <li>No misuse of the platform</li>
              <li>No fraudulent activity</li>
              <li>No attempt to harm or disrupt the system</li>
            </ul>
          </div>

          {/* 3 */}
          <div className="terms-section app-card">
            <h2>3. Account Responsibility</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials
              and for all activities under your account.
            </p>
          </div>

          {/* 4 */}
          <div className="terms-section app-card">
            <h2>4. Orders & Payments</h2>

            <h3>Order Policy:</h3>
            <ul>
              <li>All orders are subject to availability</li>
              <li>Prices may change without notice</li>
              <li>Orders are confirmed only after successful payment</li>
            </ul>
          </div>

          {/* 5 */}
          <div className="terms-section app-card">
            <h2>5. Cancellation & Refunds</h2>
            <p>
              Orders can be cancelled within a limited time frame. Refunds will be processed
              according to our refund policy.
            </p>
          </div>

          {/* 6 */}
          <div className="terms-section app-card">
            <h2>6. Limitation of Liability</h2>
            <p>
              Budget Basket shall not be held liable for any indirect, incidental,
              or consequential damages arising from the use of our services.
            </p>
          </div>

          {/* 7 */}
          <div className="terms-section app-card">
            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right to update these terms at any time.
              Continued use of the platform implies acceptance of updated terms.
            </p>
          </div>

          {/* 8 */}
          <div className="terms-section app-card">
            <h2>8. Contact Us</h2>
            <p>If you have any questions regarding these terms:</p>

            <div className="app-contact-card">
              <p><strong>Email:</strong> support@budgetbasket.com</p>
              <p><strong>Phone:</strong> +91 00000 00000</p>
              <p><strong>Address:</strong> Calicut, Kerala</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Terms;