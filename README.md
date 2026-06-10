# SkinLoves

A skincare guidance and e-commerce website built with React + Vite.

---

## How to Run

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## Build for Production

```bash
cd frontend
npm run build
```

Output is generated in `frontend/dist/`, ready to deploy to Vercel, Netlify, or any static host.

---

## Project Structure

```
skinloves/
└── frontend/
    ├── public/
    │   └── data/
    │       └── products.json    # All product data
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

## Notes

- Cart and Wishlist persist in `localStorage`.
- Login/Profile use `localStorage` (no backend auth).
- Product images are loaded from Amazon CDN URLs. If an image fails to load, a pink placeholder is shown automatically.
