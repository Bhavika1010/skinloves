import { Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart, getQty, increaseQty, decreaseQty } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const qty = getQty(product.id);
  const wishlisted = isWishlisted(product.id);

  return (
    <div className="sl-product-card">
      <div className="sl-product-img-wrap">
        <img
          className="sl-product-image"
          src={product.image}
          alt={product.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/placeholder.png";
          }}
        />
        <button
          className={`wishlist-btn ${wishlisted ? "wishlisted" : ""}`}
          onClick={() => toggleWishlist(product)}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            size={18}
            strokeWidth={2}
            fill={wishlisted ? "#c9184a" : "none"}
            color={wishlisted ? "#c9184a" : "#888"}
          />
        </button>
      </div>

      <h4 className="sl-product-name">{product.name}</h4>
      <p className="sl-product-brand">{product.brand}</p>
      <p className="sl-product-price">&#8377;{product.price}</p>

      <div className="sl-product-actions">
        {qty === 0 ? (
          <button className="cart-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        ) : (
          <div className="qty-box">
            <button onClick={() => decreaseQty(product.id)}>&#8722;</button>
            <span>{qty}</span>
            <button onClick={() => increaseQty(product.id)}>&#43;</button>
          </div>
        )}
      </div>
    </div>
  );
}
