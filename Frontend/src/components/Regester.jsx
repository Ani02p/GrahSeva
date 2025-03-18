import React, { useState } from "react";
import { registerUser } from "../Api/grahSevaAPI";
import "../styles/regester.css";
import { useNavigate } from "react-router-dom";


function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    govtId: "",
    skill: "",
    contactNo: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setMessage(""); // Clear previous messages
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (formData.contactNo.length !== 10 || isNaN(formData.contactNo)) {
      setError("Contact number must be exactly 10 digits.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await registerUser(formData);
      setMessage(response); // Success response
      navigate("/login")
    } catch (error) {
      setError(error.response?.data || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="govtId"
          placeholder="Government ID"
          value={formData.govtId}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="skill"
          placeholder="Skill"
          value={formData.skill}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contactNo"
          placeholder="Contact Number"
          value={formData.contactNo}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>

      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}

      <a href="#" className="terms-link">
        By signing up, you agree to our Terms & Conditions.
      </a>
    </div>
  );
}

export default Register;
