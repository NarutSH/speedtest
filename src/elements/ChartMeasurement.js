import React from "react";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

const ChartMeasurement = ({ label, color }) => {
  const labels = ["1"];

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "right",
      },
      title: {
        display: true,
        text: label,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Data",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),

        backgroundColor: color ? color : "rgba(255, 99, 132, 0.5)",

        barThickness: 6,
        // maxBarThickness: 8,
        minBarLength: 2,
      },
    ],
  };

  return (
    <div style={{ height: "100px" }} className="border border-2 my-2">
      <Bar options={options} data={data} />
    </div>
  );
};

export default ChartMeasurement;
