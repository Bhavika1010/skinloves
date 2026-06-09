import { useEffect, useState } from "react";
import "./Category.css";
import ProductCard from "../components/ProductCard";

const API = "http://localhost:5000";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API}/api/products`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="category-page">
      <h1 className="category-title">All Products</h1>

      {loading && <p className="category-status">Loading products...</p>}
      {error && (
        <p className="category-status error">
          Could not load products. Make sure the backend is running on port 5000.
        </p>
      )}

      {!loading && !error && products.length === 0 && (
        <p className="category-status">No products found.</p>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="product-grid">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}
