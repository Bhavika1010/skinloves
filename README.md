# SkinLoves

A skincare guidance and e-commerce website built with React + Vite (frontend) and Express (backend).

---

## How to Run

You need **two terminals** open at the same time.

### Terminal 1 — Backend

```bash
cd backend
npm install
node server.js
```

Backend runs at: `http://localhost:5000`

---

### Terminal 2 — Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## Project Structure

```
skinloves/
├── backend/
│   ├── data/
│   │   └── products.json       # All product data
│   ├── server.js               # Express server
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── assets/
    │   │   ├── hero/            # Hero/banner images
    │   │   └── Skinloveslogonbgsize.png
    │   ├── components/
    │   │   ├── Navbar.jsx / .css
    │   │   ├── Footer.jsx / .css
    │   │   ├── BYOR.jsx / .css           # Build Your Own Routine
    │   │   ├── ProductCard.jsx / .css
    │   │   └── ScrollToTop.jsx
    │   ├── context/
    │   │   ├── CartContext.jsx
    │   │   └── WishlistContext.jsx
    │   ├── data/
    │   │   └── routines.js      # Morning & night routine steps
    │   ├── pages/               # All page components + CSS
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── vite.config.js
    └── package.json
```

---

## Backend API

| Endpoint | Description |
|---|---|
| `GET /api/products` | All products |
| `GET /api/products/:category` | Products by category |
| `GET /api/search?q=query` | Search by name, brand, or category |

---

## Notes

- Cart and Wishlist persist in `localStorage`.
- Login/Profile use `localStorage` (no backend auth).
- Product images are loaded from Amazon CDN URLs. If an image fails to load, a pink placeholder is shown automatically.
