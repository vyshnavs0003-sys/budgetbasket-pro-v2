import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaShareAlt,
  FaRegClock,
  FaMinus,
  FaPlus,
  FaReceipt,
  FaMotorcycle,
  FaShoppingBag,
  FaShoppingBasket,
  FaInfoCircle,
  FaChevronRight,
} from 'react-icons/fa';
import './CartDrawer.css';
import { useCart } from '../../context/CartContext';

const CartDrawer = ({
  isOpen = true,
  onClose,
  deliveryMinutes = 17,
}) => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    itemsTotal,
    deliveryCharge,
    handlingCharge,
    smallCartCharge,
    grandTotal,
  } = useCart();

  return (
    <>
      {/* Desktop Overlay */}
      <div
        className={`cart-drawer-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      ></div>

      <aside className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="cart-drawer-header">
          <button
            type="button"
            className="cart-header-btn"
            onClick={onClose}
            aria-label="Close cart"
          >
            <FaArrowLeft />
          </button>

          <h2 className="cart-drawer-title">My Cart</h2>

          <button type="button" className="cart-share-btn">
            <FaShareAlt />
            <span>Share</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="cart-drawer-body">
          {/* If cart is empty */}
          {cartItems.length === 0 ? (
            <div className="cart-card">
              <h3 className="cart-section-heading">Your cart is empty</h3>
              <p className="cart-policy-text">
                Add some products to see them here.
              </p>
            </div>
          ) : (
            <>
              {/* Delivery Card */}
              <div className="cart-card">
                <div className="cart-delivery-top">
                  <div className="cart-delivery-icon-box">
                    <FaRegClock className="cart-delivery-icon" />
                  </div>

                  <div className="cart-delivery-text">
                    <h3>Delivery in {deliveryMinutes} minutes</h3>
                    <p>Shipment of {cartItems.length} item{cartItems.length > 1 ? 's' : ''}</p>
                  </div>
                </div>

                <div className="cart-items-list">
                  {cartItems.map((item) => (
                    <div className="cart-product-row" key={item.id}>
                      <div className="cart-product-image-box">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="cart-product-image"
                        />
                      </div>

                      <div className="cart-product-details">
                        <h4>{item.name}</h4>
                        <p>{item.unit}</p>
                        <span>₹{item.price}</span>
                      </div>

                      <div className="cart-qty-box">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => decreaseQty(item.id)}
                        >
                          <FaMinus />
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => increaseQty(item.id)}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bill Details */}
              <div className="cart-card">
                <h3 className="cart-section-heading">Bill details</h3>

                <div className="bill-row">
                  <div className="bill-left">
                    <FaReceipt />
                    <span>Items total</span>
                  </div>
                  <div className="bill-right">₹{itemsTotal}</div>
                </div>

                <div className="bill-row">
                  <div className="bill-left">
                    <FaMotorcycle />
                    <span>Delivery charge</span>
                    <FaInfoCircle className="bill-info-icon" />
                  </div>
                  <div className="bill-right">₹{deliveryCharge}</div>
                </div>

                <div className="bill-row">
                  <div className="bill-left">
                    <FaShoppingBag />
                    <span>Handling charge</span>
                    <FaInfoCircle className="bill-info-icon" />
                  </div>
                  <div className="bill-right">₹{handlingCharge}</div>
                </div>

                <div className="bill-row">
                  <div className="bill-left">
                    <FaShoppingBasket />
                    <span>Small cart charge</span>
                    <FaInfoCircle className="bill-info-icon" />
                  </div>
                  <div className="bill-right">₹{smallCartCharge}</div>
                </div>

                <div className="bill-row bill-total-row">
                  <div className="bill-left">
                    <strong>Grand total</strong>
                    <FaInfoCircle className="bill-info-icon" />
                  </div>
                  <div className="bill-right">
                    <strong>₹{grandTotal}</strong>
                  </div>
                </div>
              </div>

              {/* Cancellation Policy */}
              <div className="cart-card">
                <h3 className="cart-section-heading">Cancellation Policy</h3>
                <p className="cart-policy-text">
                  Orders cannot be cancelled once packed for delivery. In case of
                  unexpected delays, a refund will be provided, if applicable.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Bottom Sticky CTA */}
        <div className="cart-drawer-footer">
          <div className="cart-total-box">
            <span className="cart-total-price">₹{grandTotal}</span>
            <span className="cart-total-label">TOTAL</span>
          </div>

          <Link to="/login" className="cart-login-btn">
            <span>Login to Proceed</span>
            <FaChevronRight />
          </Link>
        </div>
      </aside>
    </>
  );
};

export default CartDrawer;