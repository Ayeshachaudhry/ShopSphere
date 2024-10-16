import React from "react";
import { FaSearch, FaUserCircle } from 'react-icons/fa'; // Importing icons

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">Dashboard</h2>
      <div className="navbar-actions">
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button"><FaSearch /></button>
        </div>
        <div className="user-menu">
          <FaUserCircle className="user-icon" />
          <button className="logout-button">Log Out</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
