import './ProductsCard.css';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart, cartItems, increaseQty, decreaseQty } = useCart();

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const cartItem = cartItems.find((item) => item.id === product.id);

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="price-section">
          <span className="current-price">₹{product.price}</span>
          <span className="original-price">₹{product.originalPrice}</span>
          <span className="discount">{discount}% OFF</span>
        </div>

        <p className="product-unit">{product.unit}</p>

        {!cartItem ? (
          <button
            className="add-btn"
            type="button"
            onClick={() => addToCart(product)}
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