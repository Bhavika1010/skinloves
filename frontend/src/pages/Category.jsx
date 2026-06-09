import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Category.css";
import ProductCard from "../components/ProductCard";

const API = "http://localhost:5000";

export default function Category() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`${API}/api/products`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load products");
        return res.json();
      })
      .then((data) => {
        setProducts(
          data.filter(
            (item) => item.category.toLowerCase() === name.toLowerCase()
          )
        );
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [name]);

  const categoryLabel = name
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="category-page">
      <h1 className="category-title">{categoryLabel}</h1>

      {loading && <p className="category-status">Loading products...</p>}
      {error && (
        <p className="category-status error">
          Could not load products. Make sure the backend is running on port 5000.
        </p>
      )}

      {!loading && !error && products.length === 0 && (
        <p className="category-status">No products found in this category.</p>
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
