import { Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
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
                <div className="cart-qty">
                  <button onClick={() => decreaseQty(item.id)}>&#8722;</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>&#43;</button>
                </div>
              </div>
              <button
                className="cart-remove"
                onClick={() => removeFromCart(item.id)}
                aria-label="Remove item"
              >
                <Trash2 size={18} strokeWidth={1.8} />
              </button>
            </div>
          ))}

          <div className="cart-total">
            <h2>Total: &#8377;{totalPrice.toLocaleString("en-IN")}</h2>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
