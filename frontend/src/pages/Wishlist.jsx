import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { Trash2 } from "lucide-react";
import "./Cart.css";
import "./Wishlist.css";

export default function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="cart-page">
      <h1 className="cart-title">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="empty-cart">Your wishlist is empty.</p>
      ) : (
        <div className="cart-items">
          {wishlist.map((item) => (
            <div className="cart-card" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%23ffeef2'/%3E%3C/svg%3E";
                }}
              />
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p className="cart-brand">{item.brand}</p>
                <p className="cart-price">&#8377;{item.price}</p>
                <button
                  className="checkout-btn wishlist-add-btn"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
              <button
                className="cart-remove"
                onClick={() => toggleWishlist(item)}
                aria-label="Remove from wishlist"
              >
                <Trash2 size={18} strokeWidth={1.8} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
