// src/App.js
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProvider from './UserContext'; // Import UserProvider
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SalesOverview from "./components/SalesOverview";
import UserManagement from "./components/UserManagement";
import ProductManagement from "./components/ProductManagement";
import OrderTracking from "./components/OrderTracking";
import Analytics from "./components/Analytics";
import Inventory from "./components/Inventory";
import './styles.css';

function App() {
  return (
    <Router>
      <UserProvider> {/* Wrap the app with UserProvider */}
        <div className="dashboard-container">
          <Sidebar />
          <div className="main-content">
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/sales-overview" element={<SalesOverview />} />
                <Route path="/user-management" element={<UserManagement />} />
                <Route path="/product-management" element={<ProductManagement />} />
                <Route path="/order-tracking" element={<OrderTracking />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/inventory" element={<Inventory />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
