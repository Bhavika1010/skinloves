import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  User,
  MapPin,
  Wallet,
  Package,
  Heart,
  CreditCard,
  LogOut,
  Pencil,
} from "lucide-react";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("sl_user");
    if (!saved) {
      navigate("/login");
      return;
    }
    setUser(JSON.parse(saved));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("sl_user");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-avatar-wrap">
          <User size={54} strokeWidth={1.5} color="#a4133c" />
        </div>
        <div className="profile-info">
          <h2 className="profile-name">{user.username || "User"}</h2>
          <p className="profile-email">{user.email || ""}</p>
          <button className="edit-btn">
            <Pencil size={14} strokeWidth={2} />
            Edit Profile
          </button>
        </div>
      </div>

      <div className="section-box">
        <h3 className="section-title">
          <MapPin size={18} strokeWidth={2} />
          My Addresses
        </h3>
        <p className="no-address">No saved addresses yet.</p>
        <button className="add-address-btn">+ Add New Address</button>
      </div>

      <div className="actions-list">
        <button className="action-item">
          <Wallet size={18} strokeWidth={1.8} />
          My Wallet
        </button>
        <button className="action-item">
          <Package size={18} strokeWidth={1.8} />
          My Orders
        </button>
        <Link to="/wishlist" className="action-item">
          <Heart size={18} strokeWidth={1.8} />
          My Wishlist
        </Link>
        <button className="action-item">
          <CreditCard size={18} strokeWidth={1.8} />
          Saved Payments
        </button>
        <button className="action-item logout" onClick={handleLogout}>
          <LogOut size={18} strokeWidth={1.8} />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
