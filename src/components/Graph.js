import React, { useState } from "react";
import "./style.css";
import { Line } from "react-chartjs-2";

function Graph({ graphData, label }) {
  const [days, setDays] = useState(30);

  const data = {
    labels: graphData
      .map((d) => d.date.split(",")[0])
      .slice(graphData.length - days),
    datasets: [
      {
        label: label,
        borderColor: "#1dcf94",
        data: graphData
          .map((d) => (d.totalLiquidityUSD ? d.totalLiquidityUSD : 0))
          .slice(graphData.length - days),
      },
    ],
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
        <Line
          data={data}
          width={100}
          height={200}
          options={{
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
          }}
        />
      </div>
    </>
  );
}

export default Graph;
