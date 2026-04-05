import './ProductsCard.css';
import { useCart } from '../../context/CartContext';
import { useSelector } from 'react-redux';

const ProductCard = ({ product }) => {
  const { addToCart, cartItems, increaseQty, decreaseQty } = useCart();
  const { offers, discountPercent } = useSelector((state) => state.offers);

  const hasOffer = offers.includes(product.id);

  const discountedPrice = hasOffer
    ? Math.round(product.originalPrice * (1 - discountPercent / 100))
    : product.price;

  const displayDiscountPercent = hasOffer
    ? discountPercent
    : Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const cartItem = cartItems.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (hasOffer) {
      // Create a copy with the discounted price
      addToCart({ ...product, price: discountedPrice });
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {hasOffer && <span className="offer-badge">{discountPercent}% OFF</span>}
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="price-section">
          <span className="current-price">₹{discountedPrice}</span>
          <span className="original-price">₹{product.originalPrice}</span>
          <span className="discount">{displayDiscountPercent}% OFF</span>
        </div>

        <p className="product-unit">{product.unit}</p>

        {!cartItem ? (
          <button
            className="add-btn"
            type="button"
            onClick={handleAddToCart}
          >
            Add
          </button>
        ) : (
          <div className="quantity-controls">
            <button
              className="qty-btn"
              type="button"
              onClick={() => decreaseQty(product.id)}
            >
              -
            </button>

            <span className="qty-count">{cartItem.quantity}</span>

            <button
              className="qty-btn"
              type="button"
              onClick={() => increaseQty(product.id)}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;