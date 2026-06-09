import "./Footer.css";
import logo from "../assets/Skinloveslogonbgsize.png";

export default function Footer() {
  return (
    <footer className="sl-footer">
      <div className="sl-footer-container">
        <div className="sl-footer-brand">
          <img src={logo} alt="SkinLoves Logo" className="sl-footer-logo" />
          <p className="sl-footer-tagline">
            From personalized routines to ingredient-wise product guidance, we
            make skincare clear, comforting, and easy to trust — for a skin that
            feels loved.
          </p>
        </div>

        <div className="sl-footer-column">
          <h3>SkinLoves</h3>
          <ul>
            <li><a href="#">Offers</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Returns &amp; Refunds</a></li>
            <li><a href="#">Shop Categories</a></li>
          </ul>
        </div>

        <div className="sl-footer-column">
          <h3>Helpful Skin Tools</h3>
          <ul>
            <li><a href="#">Skin Quiz</a></li>
            <li><a href="#">Routine Builder</a></li>
            <li><a href="#">Ingredient Checker</a></li>
            <li><a href="#">Blog / Skincare Tips</a></li>
          </ul>
        </div>

        <div className="sl-footer-column">
          <h3>Contact Details</h3>
          <ul>
            <li>Email: support@skinloves.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Delhi, India</li>
          </ul>
        </div>
      </div>

      <div className="sl-footer-bottom">
        &copy; {new Date().getFullYear()} SkinLoves — All Rights Reserved.
      </div>
    </footer>
  );
}
