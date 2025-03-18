import React, { useState, useEffect } from "react";
import { Link, Routes,Route } from "react-router-dom";
import "../styles/Dashboard.css";
import UsersList from './UsersList'
import SignOut from './SignOut';
import HomePage from "./HomePage";
import Services from "./services";

function Dashboard() {
  

  // Available services list
  const availableServices = [
    "Baby Sitter",
    "Chef",
    "Technician",
    "Painter",
    "Cleaner",
    "Carpenter",
    "Gardener",
    "Electrician",
    "Plumber",
  ];

  

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        {/* Side Navigation */}
        <aside className="sidebar">
          <div className="dashboard-logo-container">
            <img src="/logo.jpg" alt="Logo" className="logo" />
          </div>
          <nav className="nav-menu">
            <ul>
              <li className="active">
                <Link to="/dashboard/home">
                  <span className="nav-icon">🏠</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/services">
                  <span className="nav-icon">🔧</span>
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/bookings">
                  <span className="nav-icon">📅</span>
                  <span>All Bookings</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/users">
                  <span className="nav-icon">👥</span>
                  <span>Users</span>
                </Link>
              </li>
              <li className="nav-divider"></li>
              <li>
                <Link to="/SignOut">
                  <span className="nav-icon">🚪</span>
                  <span>Sign Out</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="content">
          <div className="page-header">
            <h1>Welcome to Your Dashboard</h1>
            <p>Find and hire professionals for your home services needs.</p>
          </div>
            <Routes>
              <Route index element= {<HomePage/>} ></Route>
              <Route path="home" element= {<HomePage/>} ></Route>
              <Route path="users" element= {<UsersList/>} ></Route>
              <Route path="services" element= {<Services/>} ></Route>
            </Routes>
        </main>
      </div>
    </div>
    
  );
}

export default Dashboard;
