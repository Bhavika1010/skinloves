import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Category.css";
import ProductCard from "../components/ProductCard";

const API = "http://localhost:5000";

export default function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    fetch(`${API}/api/search?q=${encodeURIComponent(query)}`)
      .then((res) => {
        if (!res.ok) throw new Error("Search failed");
        return res.json();
      })
      .then((data) => {
        setResults(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="category-page">
      <h1 className="category-title">
        {query ? `Results for "${query}"` : "Search"}
      </h1>

      {loading && <p className="category-status">Searching...</p>}
      {error && (
        <p className="category-status error">
          Search failed. Make sure the backend is running on port 5000.
        </p>
      )}
      {!loading && !error && results.length === 0 && query && (
        <p className="category-status">No products found for "{query}".</p>
      )}

      {!loading && !error && results.length > 0 && (
        <div className="product-grid">
          {results.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}
