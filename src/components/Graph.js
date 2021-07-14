import React, { useState } from "react";
import "./style.css";
import { Line } from "react-chartjs-2";

function Graph({ graphData, label }) {
  const [days, setDays] = useState(30);

  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 160);
    gradient.addColorStop(0, "#48addb");
    gradient.addColorStop(1, "white");

    const xlabel = graphData
      .map((d) => d.date.split(",")[0])
      .slice(graphData.length - days);

    const ydata = graphData
      .map((d) => (d.totalLiquidityUSD ? d.totalLiquidityUSD : 0))
      .slice(graphData.length - days);

    return {
      labels: xlabel,
      datasets: [
        {
          label: label,
          fill: true,
          borderColor: "#4883db",
          backgroundColor: gradient,
          data: ydata,
        },
      ],
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          callback: function (value, index, values) {
            if (value > Billion) {
              return value / Billion + "B";
            } else if (value > Million) {
              return value / Million + "M";
            } else if (value > Thousand) {
              return value / Thousand + "K";
            } else {
              return value;
            }
          },
        },
      },
    },
  };

  const Billion = 10 ** 9;
  const Million = 10 ** 6;
  const Thousand = 10 ** 3;

  return (
    <>
      <div className="btn-days">
        <button
          className={`btn-day ${days === 30 ? "active" : ""} `}
          onClick={() => setDays(30)}
        >
          30 Days
        </button>
        <button
          className={`btn-day ${days === 60 ? "active" : ""} `}
          onClick={() => setDays(60)}
        >
          60 Days
        </button>
        <button
          className={`btn-day ${days === 365 ? "active" : ""} `}
          onClick={() => setDays(365)}
        >
          1 Year
        </button>
        <button
          className={`btn-day ${days === graphData.length ? "active" : ""} `}
          onClick={() => setDays(graphData.length)}
        >
          All Time
        </button>
      </div>
      <div
        className="box-shadow-effect"
        style={{ backgroundColor: "white", padding: "15px" }}
      >
        <Line data={data} width={100} height={200} options={options} />
      </div>
    </>
  );
}

export default Graph;
