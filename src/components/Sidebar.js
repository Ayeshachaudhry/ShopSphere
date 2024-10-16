import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import { FaChartLine, FaUsers, FaBox, FaClipboardList, FaChartPie, FaWarehouse } from 'react-icons/fa'; // Importing icons

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>eCommerce Dashboard</h2>
      <ul>
        <li>
          <NavLink to="/sales-overview" activeClassName="active-link">
            <FaChartLine />
            <span style={{ marginLeft: '10px' }}>Sales Overview</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/user-management" activeClassName="active-link">
            <FaUsers />
            <span style={{ marginLeft: '10px' }}>User Management</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/product-management" activeClassName="active-link">
            <FaBox />
            <span style={{ marginLeft: '10px' }}>Product Management</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/order-tracking" activeClassName="active-link">
            <FaClipboardList />
            <span style={{ marginLeft: '10px' }}>Order Tracking</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/analytics" activeClassName="active-link">
            <FaChartPie />
            <span style={{ marginLeft: '10px' }}>Analytics</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/inventory" activeClassName="active-link">
            <FaWarehouse />
            <span style={{ marginLeft: '10px' }}>Inventory</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
