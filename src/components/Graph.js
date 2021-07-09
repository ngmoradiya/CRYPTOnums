import React from "react";
import "./style.css";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Defi",
      borderColor: "#1dcf94",
      data: [65, 59, 80, 81, 56],
    },
  ],
};

function Graph() {
  return (
    <div
      className="box-shadow-effect"
      style={{ backgroundColor: "white", padding: "15px" }}
    >
      <Line
        data={data}
        width={100}
        height={200}
        options={{ responsive: true, maintainAspectRatio: false }}
      />
    </div>
  );
}

export default Graph;
