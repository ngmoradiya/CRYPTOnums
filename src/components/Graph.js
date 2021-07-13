import React, { useEffect, useState } from "react";
import "./style.css";
import { Line } from "react-chartjs-2";
import axios from "../axios";

function Graph() {
  const [graphData, setGraphData] = useState([]);
  const [days,setDays] = useState(30)


  useEffect(() => {
    axios
      .get("chart/")
      .then((data) => {
       
        setGraphData(data.data)})
      .catch((err) => console.log(err));
  }, []);


  const data = {
    labels:graphData.map((d) => d.date.split(",")[0]).slice(graphData.length-days).map((item,index)=>
    {
      
      return item
    }) ,
    datasets: [
      {
        label: "Defi",
        borderColor: "#1dcf94",
        data: graphData.map((d) =>
          d.totalLiquidityUSD ? d.totalLiquidityUSD / 1000 : 0
        ).slice(graphData.length-days),
      },
    ],
  };
  // const data = {
  //   labels: ["January", "February", "March", "April", "May"],
  //   datasets: [
  //     {
  //       label: "Defi",
  //       borderColor: "#1dcf94",
  //       data: [65, 59, 80, 81, 56],
  //     },
  //   ],
  // };
  return (
    <>
    <div className="btn-days">
      <button className={`btn-day ${days===30?"active":""} `} onClick={()=>setDays(30)}>30 Days</button>
      <button className={`btn-day ${days===60?"active":""} `} onClick={()=>setDays(60)}>60 Days</button>
      <button className={`btn-day ${days===365?"active":""} `} onClick={()=>setDays(365)}>1year</button>
    </div>
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
    </>
  );
}

export default Graph;
