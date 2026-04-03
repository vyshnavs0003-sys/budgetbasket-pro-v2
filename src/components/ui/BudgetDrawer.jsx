import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowLeft, FaEdit, FaSave, FaExclamationTriangle } from 'react-icons/fa';
import { setMonthlyBudget, loadBudgetFromStorage } from '../../redux/budgetSlice';
import { useCart } from '../../context/CartContext';
import './BudgetDrawer.css';

const BudgetDrawer = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const monthlyBudget = useSelector((state) => state.budget.monthlyBudget);
  const { itemsTotal } = useCart();

  const [editMode, setEditMode] = useState(false);
  const [budgetInput, setBudgetInput] = useState(monthlyBudget);
  const [showWarningModal, setShowWarningModal] = useState(false);

  useEffect(() => {
    dispatch(loadBudgetFromStorage());
  }, [dispatch]);

  useEffect(() => {
    setBudgetInput(monthlyBudget);
  }, [monthlyBudget]);

  const remaining = monthlyBudget - itemsTotal;
  let remainingColor = '#28a745';
  let statusText = 'On Track';
  if (remaining <= 0) {
    remainingColor = '#dc3545';
    statusText = 'Over Budget';
  } else if (remaining <= monthlyBudget * 0.2) {
    remainingColor = '#fd7e14';
    statusText = 'Nearly Exhausted';
  }

  const percentUsed = Math.min(100, (itemsTotal / monthlyBudget) * 100);

  const handleSaveBudget = () => {
    const newBudget = parseFloat(budgetInput);
    if (!isNaN(newBudget) && newBudget >= 0) {
      dispatch(setMonthlyBudget(newBudget));
      setEditMode(false);
      // Check if over budget after saving
      if (newBudget - itemsTotal < 0) {
        setShowWarningModal(true);
      }
    }
  };

  const handleContinueShopping = () => {
    setShowWarningModal(false);
  };

  const handleCancelAndReview = () => {
    setShowWarningModal(false);
   
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="budget-drawer-overlay active" onClick={onClose}></div>

      {/* Drawer */}
      <aside className={`budget-drawer ${isOpen ? 'open' : ''}`}>
        <div className="budget-drawer-header">
          <button className="budget-header-btn" onClick={onClose}>
            <FaArrowLeft />
          </button>
          <h2 className="budget-drawer-title">Monthly Budget</h2>
          {!editMode ? (
            <button className="budget-edit-btn" onClick={() => setEditMode(true)}>
              <FaEdit /> Edit
            </button>
          ) : (
            <button className="budget-save-btn" onClick={handleSaveBudget}>
              <FaSave /> Save
            </button>
          )}
        </div>

        <div className="budget-drawer-body">
          {/* Budget Display / Edit */}
          <div className="budget-card">
            {!editMode ? (
              <div className="budget-current">
                <span className="budget-label">Monthly Budget</span>
                <span className="budget-amount">₹{monthlyBudget.toFixed(2)}</span>
              </div>
            ) : (
              <div className="budget-edit-field">
                <label>Set Monthly Budget (₹)</label>
                <input
                  type="number"
                  value={budgetInput}
                  onChange={(e) => setBudgetInput(e.target.value)}
                  autoFocus
                />
              </div>
            )}
          </div>

          {/* Spending Stats */}
          <div className="budget-card">
            <div className="stat-row">
              <span>Current Cart Total:</span>
              <strong>₹{itemsTotal.toFixed(2)}</strong>
            </div>
            <div className="stat-row">
              <span>Remaining:</span>
              <strong style={{ color: remainingColor }}>₹{remaining < 0 ? 0 : remaining.toFixed(2)}</strong>
              <span className={`status-badge ${remaining <= 0 ? 'danger' : remaining <= monthlyBudget * 0.2 ? 'warning' : 'safe'}`}>
                {statusText}
              </span>
            </div>
            <div className="progress mt-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${percentUsed}%`, backgroundColor: remainingColor }}
                aria-valuenow={percentUsed}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {percentUsed > 10 ? `${Math.round(percentUsed)}%` : ''}
              </div>
            </div>
            <p className="budget-hint">
              {remaining >= 0
                ? `You have ₹${remaining.toFixed(2)} left for the month.`
                : `⚠️ You've exceeded your budget by ₹${Math.abs(remaining).toFixed(2)}.`}
            </p>
          </div>

          {/* Tips */}
          <div className="budget-card tips">
            <h4>💡 Budget Tips</h4>
            <ul>
              <li>Set a realistic monthly limit based on past spending.</li>
              <li>Use the cart summary to track your total before checkout.</li>
              <li>Adjust your budget anytime to match your needs.</li>
            </ul>
          </div>
        </div>
      </aside>

      {/* Warning */}
      {showWarningModal && (
        <div className="warning-modal-overlay">
          <div className="warning-modal">
            <FaExclamationTriangle className="warning-icon" />
            <h3>Budget Exceeded!</h3>
            <p>
              Your cart total (₹{itemsTotal.toFixed(2)}) exceeds your monthly budget
              (₹{monthlyBudget.toFixed(2)}). Do you want to continue shopping?
            </p>
            <div className="warning-buttons">
              <button className="btn-secondary" onClick={handleCancelAndReview}>
                Review Cart
              </button>
              <button className="btn-primary" onClick={handleContinueShopping}>
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BudgetDrawer;