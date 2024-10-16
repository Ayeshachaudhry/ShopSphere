// Analytics.js
import { Chart, CategoryScale, LinearScale, BarElement, ArcElement } from 'chart.js';
import React from "react";
import { Pie } from 'react-chartjs-2';

// Register the necessary components for the chart
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement);

const Analytics = () => {
  const data = {
    labels: ['Electronics', 'Fashion', 'Home Appliances'],
    datasets: [
      {
        label: 'Category Sales',
        data: [300, 150, 200],
        backgroundColor: ['red', 'blue', 'green'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="analytics">
      <h3>Sales by Category</h3>
      <div className="chart-container">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default Analytics;
