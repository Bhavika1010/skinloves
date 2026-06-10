import { useEffect, useState } from "react";
import "./Category.css";
import ProductCard from "../components/ProductCard";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/products.json")
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
          Could not load products.
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
