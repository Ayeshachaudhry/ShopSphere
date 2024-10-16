import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { useEffect, useRef } from 'react';

// Register the scale and any other components you use in the chart
Chart.register(CategoryScale, LinearScale, BarElement);

const MyChartComponent = () => {
  const chartRef = useRef(null);
  const myChartRef = useRef(null);

  useEffect(() => {
    // Destroy previous chart instance if it exists
    if (myChartRef.current) {
      myChartRef.current.destroy();
    }

    // Render a new chart
    const ctx = chartRef.current.getContext('2d');
    myChartRef.current = new Chart(ctx, {
      type: 'bar', // or 'line', 'pie', etc.
      data: {
        labels: ['Label1', 'Label2'],
        datasets: [{
          label: 'Dataset',
          data: [10, 20],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }]
      },
      options: {
        scales: {
          x: {
            type: 'category',
            // other scale options...
          },
          y: {
            beginAtZero: true, // Start y-axis from 0
          }
        }
      }
    });

    // Clean up: destroy the chart on component unmount
    return () => {
      myChartRef.current.destroy();
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default MyChartComponent;
