import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">

      {/* HERO */}
      <section className="app-section app-hero text-center">
        <div className="app-container">
          <h1 className="app-heading">Privacy Policy</h1>
          <p className="app-subtext">
            Your privacy matters to us. Please read how we handle your data.
          </p>
          <p className="app-meta">Last Updated: March 15, 2024</p>
        </div>
      </section>


      {/* CONTENT */}
      <section className="app-section">
        <div className="app-container app-container-sm">

          {/* 1 */}
          <div className="policy-section app-card">
            <h2>1. Introduction</h2>
            <p>
              At Budget Basket, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website or make a purchase.
              If you do not agree with the terms, please do not use our services.
            </p>
          </div>

          {/* 2 */}
          <div className="policy-section app-card">
            <h2>2. Information We Collect</h2>
            <p>We may collect personal information when you:</p>
            <ul>
              <li>Register for an account</li>
              <li>Make a purchase</li>
              <li>Subscribe to updates</li>
              <li>Fill out forms</li>
              <li>Contact support</li>
            </ul>
            <p>
              This may include your name, email, phone number, address, and payment details.
            </p>
          </div>

          {/* 3 */}
          <div className="policy-section app-card">
            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>Process orders</li>
              <li>Communicate with you</li>
              <li>Send updates (with consent)</li>
              <li>Improve our services</li>
              <li>Prevent fraud</li>
            </ul>
          </div>

          {/* 4 */}
          <div className="policy-section app-card">
            <h2>4. Information Sharing</h2>
            <ul>
              <li>
                <strong>Service Providers:</strong> Payment, delivery, and hosting partners
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law
              </li>
              <li>
                <strong>Business Transfers:</strong> Mergers or acquisitions
              </li>
            </ul>
            <p>We never sell your personal data.</p>
          </div>

          {/* 5 */}
          <div className="policy-section app-card">
            <h2>5. Data Security</h2>
            <p>
              We use secure systems to protect your data, but no system is 100% safe.
            </p>
          </div>

          {/* 6 */}
          <div className="policy-section app-card">
            <h2>6. Cookies</h2>
            <p>
              We use cookies to enhance your experience. You can disable them in your browser.
            </p>
          </div>

          {/* 7 */}
          <div className="policy-section app-card">
            <h2>7. Your Rights</h2>
            <ul>
              <li>Access your data</li>
              <li>Correct information</li>
              <li>Delete data</li>
              <li>Opt-out of marketing</li>
            </ul>
          </div>

          {/* 8 */}
          <div className="policy-section app-card">
            <h2>8. Children's Privacy</h2>
            <p>
              We do not knowingly collect data from children under 13.
            </p>
          </div>

          {/* 9 */}
          <div className="policy-section app-card">
            <h2>9. Policy Updates</h2>
            <p>
              We may update this policy occasionally. Please review it regularly.
            </p>
          </div>

          {/* 10 */}
          <div className="policy-section app-card">
            <h2>10. Contact Us</h2>
            <p>If you have any questions:</p>

            <div className="contact-info app-contact-card">
              <p><strong>Email:</strong> privacy@budgetbasket.com</p>
              <p><strong>Phone:</strong> +91 00000 00000</p>
              <p><strong>Address:</strong> Calicut, Kerala</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;