import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setError("");
    setFormData({ name: "", username: "", password: "", confirmPassword: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (isSignup) {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      // Save a mock user to localStorage
      const user = {
        username: formData.username || formData.name,
        email: formData.username,
      };
      localStorage.setItem("sl_user", JSON.stringify(user));
      navigate("/profile");
    } else {
      const saved = localStorage.getItem("sl_user");
      if (saved) {
        navigate("/profile");
      } else {
        setError("No account found. Please sign up first.");
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h2>
        <p className="auth-subtitle">
          {isSignup
            ? "Join SkinLoves and start your skincare journey!"
            : "Log in to continue your skincare journey"}
        </p>

        {error && <p className="auth-error">{error}</p>}

        <form className="auth-form" onSubmit={handleSubmit}>
          {isSignup && (
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="input-group">
            <label>Email / Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your email or username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {isSignup && (
            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <button type="submit" className="auth-button">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {isSignup ? (
              <>
                Already have an account?{" "}
                <button className="toggle-link" onClick={toggleForm}>
                  Login
                </button>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <button className="toggle-link" onClick={toggleForm}>
                  Sign up
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
