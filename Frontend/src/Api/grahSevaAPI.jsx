import axios from "axios";
import Dashboard from "../components/Dashboard";
import React, { useEffect } from "react";

// Correct backend base URL
const API_URL = "http://localhost:8080/GrahSeva"; 

// Register User API
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/registerUser`, userData);
    return response.data; // Successful response
  } catch (error) {
    console.error("Error during registration:", error.response?.data || error.message);
    throw error;
  }
};


export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/loginUser`, userData);
    return response.data; // Successful response

  } catch (error) {
    console.error("Error during login:", error.response?.data || error.message);
    throw error; // Forward the error for further handling
  }

  const handleLogout = async () => {
    const token = localStorage.getItem("token"); // Get stored JWT token

    localStorage.removeItem("token"); // Remove token from storage
    navigate("/login"); // Redirect to login page
};
};
