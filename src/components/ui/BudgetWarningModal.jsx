import { FaExclamationTriangle } from 'react-icons/fa';
import './BudgetWarningModal.css';

const BudgetWarningModal = ({ isOpen, onClose, onReviewCart, cartTotal, budget }) => {
  if (!isOpen) return null;

  return (
    <div className="warning-modal-overlay">
      <div className="warning-modal">
        <FaExclamationTriangle className="warning-icon" />
        <h3>Budget Exceeded!</h3>
        <p>
          Your cart total (₹{cartTotal.toFixed(2)}) exceeds your monthly budget
          (₹{budget.toFixed(2)}). Do you want to continue shopping?
        </p>
        <div className="warning-buttons">
          <button className="btn-secondary" onClick={onReviewCart}>
            Review Cart
          </button>
          <button className="btn-primary" onClick={onClose}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetWarningModal;