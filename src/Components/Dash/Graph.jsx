import React from "react";
import StackedBarChart from "./Graph/StackedBarChart";

const Graph = () => {
  // Labels representing time intervals from 12am to 12pm
  const labels = [
    "12am",
    "1am",
    "2am",
    "3am",
    "4am",
    "5am",
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "12am",
    "1am",
    "2am",
    "3am",
    "4am",
    "5am",
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "12am",
    "1am",
    "2am",
    "3am",
    "4am",
    "5am",
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Cardio Calories",
        data: [
          10, 10, 10, 10, 10, 10, 10, 100, 150, 200, 250, 300, 450, 500, 650,
          150, 200, 350, 400, 550, 600, 700, 10, 10, 10, 10, 10, 10, 10, 100,
        ], // Sample data for cardio calories burned
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Strength Calories",
        data: [
          10, 10, 10, 10, 10, 10, 80, 100, 120, 140, 160, 180, 200, 220, 240,
          260, 280, 300, 320, 10, 10, 10, 10, 10, 10, 10, 100, 10, 10, 10, 10,
        ], // Sample data for strength training calories burned
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  return <StackedBarChart data={data} />;
};

export default Graph;
