import React, { useState, useEffect } from "react";
import axios from "../../axios";

function Stats({ data, topTenTokens }) {
  const [btcPrice, setBtcPrice] = useState(-1);
  const [ethPrice, setEthPrice] = useState(-1);

  useEffect(() => {
    axios
      .get("/values")
      .then((value) => {
        setBtcPrice(Number(value.data.btcPrice));
        setEthPrice(Number(value.data.ethPrice));
      })
      .catch((err) => console.log(err));
  }, []);

  const usd =
    Object.keys(data).length > 0 &&
    data.tvl[data.tvl.length - 1].totalLiquidityUSD;

  const inusd =
    Object.keys(data).length > 0 &&
    (data.tvl[data.tvl.length - 1].totalLiquidityUSD / 1000000000).toFixed(2);

  return (
    <>
      <div className="container" style={{ padding: "0px" }}>
        <div className="row">
          <div className="col-lg-6">
            <div className="box-shadow-effect">
              <h2>Key Statistics</h2>
              <p>TOTAL VALUE LOCKED</p>
              <div className="stats">
                <span>In USD</span>
                <span>{inusd}B</span>
              </div>
              <div className="stats">
                <span>In ETH</span>
                <span>{ethPrice > 0 ? (usd / ethPrice).toFixed(2) : null}</span>
              </div>
              <div className="stats">
                <span>In BTC</span>
                <span>{btcPrice > 0 ? (usd / btcPrice).toFixed(2) : null}</span>
              </div>
              <div className="stats">
                <span>Category</span>
                <span>{data.category}</span>
              </div>
              <div className="stats">
                <span>ETH Locked</span>
                <span>1.31M ETH</span>
              </div>
              <div className="stats">
                <span>% Supply Locked</span>
                <span>1.12%</span>
              </div>
              <div className="stats">
                <span>Blockchain</span>
                <span>Multichain</span>
              </div>
              <div className="stats">
                <span>Most Locked</span>
                <span>
                  $
                  {topTenTokens && topTenTokens[0]
                    ? topTenTokens[0][0]
                    : "WETH"}
                </span>
              </div>
              <div className="stats">
                <span>Protocol Taken</span>
                <span>$AAVE</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box-shadow-effect">
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
        </div>
      </div>
    </>
  );
}

export default Stats;
