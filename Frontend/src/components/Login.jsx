import React, { useState } from "react";
import "../styles/login.css";
import { loginUser } from "../Api/grahSevaAPI";
import { Link, useNavigate } from "react-router-dom";




function Login() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await loginUser({ email, password });
      setMessage(response); 
      navigate("/Dashboard")
    } catch (error) {
      console.error(error);
      setError(error.response?.data || "Login failed. Please check your credentials.");
     
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <div className="himangi">
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
          <p>
            <Link className="signUP" to="/register">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Login;
