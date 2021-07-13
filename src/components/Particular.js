import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
// import {useData} from "../contexts/globalState"
const Particular = () => {
  const { name } = useParams();
  const [data, setData] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [days, setDays] = useState(30);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://mighty-sands-89627.herokuapp.com/protocol/" +
            name.toLowerCase()
        );
        setData(data);

        const settingData = data.tvl.map((item, index) => ({
          ...item,
          date: new Date(data.tvl[index].date * 1000).toLocaleString(),
        }));

        setGraphData(settingData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [name]);

  const gData = {
    labels: graphData
      .map((d) => d.date.split(",")[0])
      .slice(graphData.length - days)
      .map((item, index) => {
        return item;
      }),
    datasets: [
      {
        label: name,
        borderColor: "#1dcf94",
        data: graphData
          .map((d) => (d.totalLiquidityUSD ? d.totalLiquidityUSD / 1000 : 0))
          .slice(graphData.length - days),
      },
    ],
  };

  const inusd =
    Object.keys(data).length > 0 &&
    (data.tvl[data.tvl.length - 1].totalLiquidityUSD / 1000000000).toFixed(2);
  return (
    <div>
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
          1year
        </button>
      </div>
      <div
        className="box-shadow-effect"
        style={{ backgroundColor: "white", padding: "15px" }}
      >
        <Line
          data={gData}
          width={100}
          height={200}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </div>
      <div className="statsBox" style={{ display: "flex", margin: "20px 0" }}>
        <div
          className="box-shadow-effect"
          style={{ backgroundColor: "white", padding: "15px", flex: "3" }}
        >
          <h2>Key Statistics</h2>
          <p>TOTAL VALUE LOCKED</p>
          <div className="stats">
            <span>In USD</span>
            <span>{inusd}B</span>
          </div>
          <div className="stats">
            <span>In ETH</span>
            <span>30000</span>
          </div>
          <div className="stats">
            <span>In BTC</span>
            <span>789283773</span>
          </div>
          <div className="stats">
            <span>Category</span>
            <span>{data.category}</span>
          </div>
        </div>
        <div style={{ flex: "2" }}>
          {/* <div className="box-shadow-effect" style={{ backgroundColor: "white", padding: "15px" }} >
                
                </div>
                <div className="box-shadow-effect" style={{ backgroundColor: "white", padding: "15px" }} >
                
                </div> */}
        </div>
      </div>
      <div
        className="box-shadow-effect"
        style={{ backgroundColor: "white", padding: "15px" }}
      >
        <h1 style={{ fontSize: "1.5rem", color: "#A78BFA" }}>
          What is {data?.name}?
        </h1>
        <p>{data.description}</p>
      </div>
      {/* Trending in Lending
            <div style={{display:"flex"}}>

           
            <div className="box-shadow-effect" style={{ backgroundColor: "white", padding: "15px" }} >
               
            </div>
            <div className="box-shadow-effect" style={{ backgroundColor: "white", padding: "15px" }} >
                
            </div>
            </div>
            <div style={{display:"flex"}}>

           
<div className="box-shadow-effect" style={{ backgroundColor: "white", padding: "15px" }} >
   
</div>
<div className="box-shadow-effect" style={{ backgroundColor: "white", padding: "15px" }} >
  
</div>
</div>
            Aave historical stats
            <div className="box-shadow-effect" style={{ backgroundColor: "white", padding: "15px" }} >
              
            </div>
            <div className="box-shadow-effect" style={{ backgroundColor: "white", padding: "15px" }} >
               
            </div>
            <div className="box-shadow-effect" style={{ backgroundColor: "white", padding: "15px" }} >
               
            </div> */}
    </div>
  );
};

export default Particular;
