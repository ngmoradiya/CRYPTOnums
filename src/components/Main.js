import React, { useEffect, useState } from "react";
import axios from "../axios";
import Highlights from "./Highlights";
import Category from "./Category";
import Graph from "./Graph";

function Main() {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    axios
      .get("chart/")
      .then((data) => {
        setGraphData(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container" style={{ paddingBottom: "20px" }}>
        <p style={{ fontSize: "20px", marginTop: "2%", textAlign: "center" }}>
          CRYPTO nums tracks entire crypto industry data in real time and bring
          to you only those numbers that help you make decision or understand
          the trend better
        </p>
        <Highlights />
        <Graph graphData={graphData} label="Defi" />
        <Category />
      </div>
    </>
  );
}

export default Main;
