const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const getProducts = () => {
  return JSON.parse(fs.readFileSync(path.join(__dirname, "data/products.json"), "utf8"));
};

// GET all products
app.get("/api/products", (req, res) => {
  res.json(getProducts());
});

// GET products by category
app.get("/api/products/:category", (req, res) => {
  const { category } = req.params;
  const products = getProducts();
  const filtered = products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
  res.json(filtered);
});

// GET search results
app.get("/api/search", (req, res) => {
  const q = (req.query.q || "").toLowerCase().trim();
  if (!q) return res.json([]);
  const products = getProducts();
  const results = products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`SkinLoves backend running at http://localhost:${PORT}`);
});
