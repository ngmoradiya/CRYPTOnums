import React from "react";
import Convertor from "../Convertor";
import { useData } from "../../contexts/globalState";

function Stats({ data, topTenTokens, btcPrice, ethPrice }) {
  const { totalValue } = useData();
  const usd =
    Object.keys(data).length > 0 &&
    data.tvl[data.tvl.length - 1].totalLiquidityUSD;

  const percentLocked = ((usd / (totalValue * 10 ** 9)) * 100).toFixed(2);
  const chain =
    data && data.chains && data.chains.length > 1
      ? "Multi-Chain"
      : data && data.chain;

  return (
    <>
      <div className="container" style={{ padding: "0px" }}>
        <div className="row">
          <div className="col-md-6">
            <div className="box-shadow-effect">
              <h2>Key Statistics</h2>
              <p>TOTAL VALUE LOCKED</p>
              <div className="stats">
                <span>In USD</span>
                <span>{usd ? Convertor(usd) : null}</span>
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
                <span>% Supply Locked</span>
                <span>{percentLocked ? percentLocked : null}%</span>
              </div>
              <div className="stats">
                <span>Blockchain</span>
                <span>{chain ? chain : null}</span>
              </div>
              <div className="stats">
                <span>Most Locked</span>
                <span>
                  ${topTenTokens && topTenTokens[0] ? topTenTokens[0][0] : null}
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box-shadow-effect">
              <h2>Top 10 Tokens</h2>
              {topTenTokens &&
                topTenTokens.map((item) => {
                  return (
                    <div className="stats">
                      <span>{item[0]}</span>
                      <span>${item[1]}</span>
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
