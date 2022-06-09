import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

const ChartInternetSpeed = ({ title, color }) => {
  const [chartData, setChartData] = useState([]);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        // beginAtZero: true,
        min: 50,
        max: 100,
      },
    },
  };

  const labels = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const data = {
    labels,
    datasets: [
      {
        label: title,
        type: "line",
        data: labels.map(() => faker.datatype.number({ min: 90, max: 100 })),
        backgroundColor: color,
        fill: "start",
        pointRadius: 2,
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <Line data={data} options={chartOptions} />
    </div>
  );
};

export default ChartInternetSpeed;

// "linear-gradient(180deg, rgba(255,133,3,1) 0%, rgba(255,0,0,0) 100%)"

// import React from "react";

// const ChartInternetSpeed = () => {
//   return <div>ChartInternetSpeed</div>;
// };

// export default ChartInternetSpeed;
