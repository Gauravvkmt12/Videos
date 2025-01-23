import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      email,
      password,
      keepSignedIn,
    });
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="login-card">
          <div className="logo text-center">
            <img src="/image/3tv-logo.jpg" alt="" />
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Username or Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-options">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="keepSignedIn"
                  checked={keepSignedIn}
                  onChange={(e) => setKeepSignedIn(e.target.checked)}
                />
                <label htmlFor="keepSignedIn">Remember Me</label>
              </div>
              <Link to="/forgot-password" className="forgot-link">
                Lost your password?
              </Link>
            </div>
            <button type="submit" className="btn-login">
              Log In
            </button>
            <div className="form-footer">
              <Link to="/Signup">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
