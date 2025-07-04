import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim() && username.trim()) {
      onLoginSuccess(username); // Pass username to App.jsx
    } else {
      alert("Please fill all fields: Username, Email, and Password");
    }
  };

  return (
    <div className="login-bg d-flex align-items-center justify-content-center vh-100">
      <form
        onSubmit={handleSubmit}
        className="bg-transparent text-dark p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h3 className="fw-bold mb-4 text-center">Login</h3>

        <div className="mb-3">
          <label className="form-label fw-semibold">Username</label>
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder="Enter your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Email Address</label>
          <input
            type="email"
            className="form-control rounded-pill"
            placeholder="Enter your Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Password</label>
          <input
            type="password"
            className="form-control rounded-pill"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn fw-bold px-5 py-2"
            style={{ backgroundColor: "#d8f275" }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
