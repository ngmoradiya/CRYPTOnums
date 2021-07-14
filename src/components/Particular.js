import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Graph from "./Graph";
const Particular = () => {
  const { name } = useParams();
  const [data, setData] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [topTenTokens, setTopTenTokens] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://mighty-sands-89627.herokuapp.com/protocol/" +
            name.toLowerCase()
        );
        setData(data);
        // if (data) {
        const tokens = data.tokensInUsd[data.tokensInUsd.length - 1].tokens;
        const topTokens = [];
        for (let x in tokens) topTokens.push([x, tokens[x].toFixed(2)]);
        topTokens.sort((a, b) => b[1] - a[1]);
        topTokens.splice(10);
        setTopTenTokens(topTokens);
        // console.log(topTokens);
        // }

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

  const inusd =
    Object.keys(data).length > 0 &&
    (data.tvl[data.tvl.length - 1].totalLiquidityUSD / 1000000000).toFixed(2);
  return (
    <div>
      <Graph graphData={graphData} label={name} />
      <div className="container" style={{ margin: "2% 0%", padding: "0px" }}>
        <div className="row">
          <div className="col-lg-6">
            <div
              className="box-shadow-effect"
              style={{
                backgroundColor: "white",
                padding: "15px",
                marginBottom: "10px",
              }}
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
              {/* </div> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="box-shadow-effect"
              style={{
                backgroundColor: "white",
                padding: "15px",
              }}
            >
              <h2>Top 10 Tokens</h2>
              {topTenTokens &&
                topTenTokens.map((item) => {
                  return (
                    <div className="stats">
                      <span>{item[0]}</span>
                      <span>{item[1]}</span>
                    </div>
                  );
                })}
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div
        className="box-shadow-effect"
        style={{ backgroundColor: "white", padding: "15px" }}
      >
        <h1 style={{ fontSize: "1.5rem", color: "#A78BFA" }}>
          About {data?.name}?
        </h1>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Particular;
