// OrderTracking.js
import React from "react";

const OrderTracking = () => {
  const orders = [
    { id: 1, orderNumber: "ORD123", status: "Shipped", date: "2023-10-01" },
    { id: 2, orderNumber: "ORD124", status: "Processing", date: "2023-10-02" },
  ];

  return (
    <div className="order-tracking">
      <h3>Order Tracking</h3>
      <table>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.orderNumber}</td>
              <td>{order.status}</td>
              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTracking;
