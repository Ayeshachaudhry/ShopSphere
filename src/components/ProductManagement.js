import React, { useEffect, useState } from "react";
import axios from "axios"; // Ensure axios is installed via npm

const ProductManagement = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Fetch products from Fake Store API
    axios.get("https://fakestoreapi.com/products")
      .then(response => {
        setProducts(response.data); // Update products state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error("Error fetching product data:", error);
        setError("Failed to load products. Please try again."); // Set error message
        setLoading(false); // Set loading to false on error
      });
  }, []);

  return (
    <div className="product-management">
      <h3>Product Management</h3>
      {loading && <p>Loading products...</p>} {/* Show loading message */}
      {error && <p className="error-message">{error}</p>} {/* Show error message */}

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? ( // Check if products array is empty
            <tr>
              <td colSpan="2">No products available.</td> {/* Message for empty products */}
            </tr>
          ) : (
            products.map(product => (
              <tr key={product.id}>
                <td>{product.title}</td> {/* Use product.title for the product name */}
                <td>${product.price}</td> {/* Use product.price for the price */}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagement;
