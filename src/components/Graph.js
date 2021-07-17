import React, { useState } from "react";
import "./style.css";
import { Line } from "react-chartjs-2";

function Graph({ graphData, label }) {
  const [days, setDays] = useState(30);

  console.log(graphData, "gd");

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
              return "$" + (value / Billion).toFixed(2) + "B";
            } else if (value > Million) {
              return "$" + (value / Million).toFixed(2) + "M";
            } else if (value > Thousand) {
              return "$" + (value / Thousand).toFixed(2) + "K";
            } else {
              return "$" + value.toFixed(2);
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
      <div
        className="box-shadow-effect"
        style={{ backgroundColor: "white", padding: "15px" }}
      >
        <div style={{ textAlign: "end" }}>
          <button
            className={`btn-day ${days === 30 ? "active" : ""} `}
            onClick={() => setDays(30)}
          >
            30d
          </button>
          <button
            className={`btn-day ${days === 60 ? "active" : ""} `}
            onClick={() => setDays(60)}
          >
            60d
          </button>
          <button
            className={`btn-day ${days === 365 ? "active" : ""} `}
            onClick={() => setDays(365)}
          >
            1y
          </button>
          <button
            className={`btn-day ${days === graphData.length ? "active" : ""} `}
            onClick={() => setDays(graphData.length)}
          >
            all
          </button>
        </div>
        <div>
          <Line data={data} height={200} options={options} />
        </div>
      </div>
    </>
  );
}

export default Graph;
