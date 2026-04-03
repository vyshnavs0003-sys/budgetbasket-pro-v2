import React from "react";
import "./CancellationRefund.css";

const CancellationRefund = () => {
  return (
    <div className="cancel-page">

      {/* HERO */}
      <section className="app-section app-hero text-center">
        <div className="app-container">
          <h1 className="app-heading">Cancellation & Refund Policy</h1>
          <p className="app-subtext">
            Transparent policies to ensure a smooth shopping experience.
          </p>
          <p className="app-meta">Last Updated: March 15, 2024</p>
        </div>
      </section>


      {/* CONTENT */}
      <section className="app-section">
        <div className="app-container app-container-sm">

          {/* 1 */}
          <div className="cancel-section app-card">
            <h2>1. Order Cancellation</h2>
            <p>
              You can cancel your order within a limited time after placing it.
              Once the order is processed or shipped, cancellation may not be possible.
            </p>

            <h3>Cancellation Conditions:</h3>
            <ul>
              <li>Cancellation allowed before dispatch</li>
              <li>No cancellation after out-for-delivery</li>
              <li>Instant refunds for prepaid cancelled orders</li>
            </ul>
          </div>

          {/* 2 */}
          <div className="cancel-section app-card">
            <h2>2. Refund Policy</h2>
            <p>
              We ensure fair refunds in case of issues with your order.
            </p>

            <h3>Eligible Refund Cases:</h3>
            <ul>
              <li>Damaged or defective products</li>
              <li>Wrong item delivered</li>
              <li>Missing items in order</li>
              <li>Order cancelled successfully</li>
            </ul>
          </div>

          {/* 3 */}
          <div className="cancel-section app-card">
            <h2>3. Refund Process</h2>

            <h3>How refunds are processed:</h3>
            <ul>
              <li>Refund initiated within 24–48 hours</li>
              <li>Credited to original payment method</li>
              <li>May take 5–7 business days to reflect</li>
            </ul>
          </div>

          {/* 4 */}
          <div className="cancel-section app-card">
            <h2>4. Non-Refundable Situations</h2>
            <ul>
              <li>Perishable items once delivered</li>
              <li>Products damaged due to misuse</li>
              <li>Late complaints after delivery window</li>
            </ul>
          </div>

          {/* 5 */}
          <div className="cancel-section app-card">
            <h2>5. Return Guidelines</h2>
            <p>
              In some cases, you may be required to return the item before receiving a refund.
            </p>

            <ul>
              <li>Keep original packaging</li>
              <li>Provide proof (images if needed)</li>
              <li>Follow return instructions from support</li>
            </ul>
          </div>

          {/* 6 */}
          <div className="cancel-section app-card">
            <h2>6. Contact Support</h2>
            <p>If you need help with cancellations or refunds:</p>

            <div className="app-contact-card">
              <p><strong>Email:</strong> support@budgetbasket.com</p>
              <p><strong>Phone:</strong> +91 00000 00000</p>
              <p><strong>Address:</strong> Kerala, India</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CancellationRefund;