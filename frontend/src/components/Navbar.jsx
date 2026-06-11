import { useState, useEffect } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { Search, Heart, ShoppingCart, User, X } from "lucide-react";
import "./Navbar.css";
import logo from "../assets/Skinloveslogonbgsize.png";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 10) {
        setScrollUp(false);
      } else {
        setScrollUp(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
      setSearch("");
      setShowSearch(false);
    }
    if (e.key === "Escape") {
      setShowSearch(false);
      setSearch("");
    }
  };

  return (
    <>
      <nav className={`navbar-top ${scrollUp ? "" : "hidden"}`}>
        <div className="navbar-left">
          <Link to="/">
            <img src={logo} alt="SkinLoves Logo" className="logo" />
          </Link>
        </div>

        {showSearch && (
          <div className="search-overlay">
            <input
              type="text"
              placeholder="Search skincare..."
              className="search-bar"
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearchSubmit}
              onBlur={() => {
                setTimeout(() => {
                  setShowSearch(false);
                  setSearch("");
                }, 150);
              }}
            />
          </div>
        )}

        <div className="navbar-right">
          {!showSearch ? (
            <button
              className="nav-icon-btn"
              onClick={() => setShowSearch(true)}
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.8} />
            </button>
          ) : (
            <button
              className="nav-icon-btn"
              onClick={() => { setShowSearch(false); setSearch(""); }}
              aria-label="Close search"
            >
              <X size={20} strokeWidth={1.8} />
            </button>
          )}

          {!showSearch && (
            <>
              <Link to="/wishlist" className="nav-icon-btn icon-badge-wrap" aria-label="Wishlist">
                <Heart size={20} strokeWidth={1.8} />
                {totalWishlistItems > 0 && (
                  <span className="icon-badge">{totalWishlistItems}</span>
                )}
              </Link>

              <Link to="/cart" className="nav-icon-btn icon-badge-wrap" aria-label="Cart">
                <ShoppingCart size={20} strokeWidth={1.8} />
                {totalItems > 0 && (
                  <span className="icon-badge">{totalItems}</span>
                )}
              </Link>

              <Link to="/login" className="nav-icon-btn" aria-label="Login">
                <User size={20} strokeWidth={1.8} />
              </Link>
            </>
          )}
        </div>
      </nav>

      <div className={`navbar-bottom ${scrollUp ? "" : "move-up"}`}>
        <ul className="bottom-links">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/ingredients">Ingredients</NavLink>
          </li>
          <li>
            <NavLink to="/concerns">Concerns</NavLink>
          </li>
          <li>
            <NavLink to="/pharma">Pharma</NavLink>
          </li>
          <li>
            <NavLink to="/brands">Brands</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
