import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Ingredients from "./pages/Ingredients";
import Pharma from "./pages/Pharma";
import Brands from "./pages/Brands";
import Login from "./pages/Login";
import Category from "./pages/Category";
import Profile from "./pages/Profile";
import SearchResults from "./pages/SearchResults";
import Concerns from "./pages/Concerns";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import AllProducts from "./pages/AllProducts";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/pharma" element={<Pharma />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/concerns" element={<Concerns />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/products" element={<AllProducts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
