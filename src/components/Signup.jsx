import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple password confirmation check
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log({
      username,
      email,
      password,
    });
  };

  return (
    <section className="signup-section">
      <div className="signup-container">
        <div className="signup-card">
        <div className="logo-container">
  <div className="logo text-center">
    <img src="/image/3tv-logo.jpg" alt="3.0 TV Logo" className="logo-image" />
  </div>
</div>

          <h2 className="signup-title">Register For This Site</h2>
          <form className="signup-form" onSubmit={handleSubmit}>
            {/* Username Input */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Email Input */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
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

            {/* Confirm Password Input */}
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <p className="confirmation-text">
              Registration confirmation will be emailed to you.
            </p>

            <button type="submit" className="btn-register">
              Register
            </button>

            <div className="form-footer">
              <Link to="/login">Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  
  );
};

export default Signup;
