import './ProductsCard.css';
import { useCart } from '../../context/CartContext';
import { useSelector } from 'react-redux';

const ProductCard = ({ product }) => {
  const { addToCart, cartItems, increaseQty, decreaseQty } = useCart();
  const { offers, discountPercent } = useSelector((state) => state.offers);

  const hasOffer = offers.includes(product.id);

  // Calculate the current price (after product's own discount)
  const regularDiscountedPrice = product.price; // This is already the price after product's original discount

  // If has offer, apply EXTRA discountPercent on top of regularDiscountedPrice
  const finalPrice = hasOffer
    ? Math.round(regularDiscountedPrice * (1 - discountPercent / 100))
    : regularDiscountedPrice;

  // Calculate total discount percentage from original price for display
  const totalDiscountPercent = hasOffer
    ? Math.round(((product.originalPrice - finalPrice) / product.originalPrice) * 100)
    : Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const cartItem = cartItems.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (hasOffer) {
      addToCart({ ...product, price: finalPrice });
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {hasOffer && <span className="offer-badge">EXTRA {discountPercent}% OFF</span>}
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="price-section">
          <span className="current-price">₹{finalPrice}</span>
          <span className="original-price">₹{product.originalPrice}</span>
          <span className="discount">{totalDiscountPercent}% OFF</span>
        </div>

        <p className="product-unit">{product.unit}</p>

        {!cartItem ? (
          <button className="add-btn" onClick={handleAddToCart}>
            Add
          </button>
        ) : (
          <div className="quantity-controls">
            <button className="qty-btn" onClick={() => decreaseQty(product.id)}>-</button>
            <span className="qty-count">{cartItem.quantity}</span>
            <button className="qty-btn" onClick={() => increaseQty(product.id)}>+</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;