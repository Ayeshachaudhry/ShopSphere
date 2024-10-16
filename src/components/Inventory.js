// Inventory.js
import React from "react";

const Inventory = () => {
  const products = [
    { id: 1, name: "Laptop", stock: 10 },
    { id: 2, name: "Phone", stock: 5 },
  ];

  return (
    <div className="inventory">
      <h3>Inventory Management</h3>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
