import React from "react";
import Convertor from "../Convertor";

function ParticularHightlights({ data, btcPrice }) {
  const usd =
    Object.keys(data).length > 0 &&
    data.tvl[data.tvl.length - 1].totalLiquidityUSD;
  return (
    <>
      <div
        className="box-shadow-effect"
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          Bitcoin At Work
          <h2>{btcPrice > 0 ? (usd / btcPrice).toFixed(0) : null}</h2>
        </div>
        <div>
          USD Value
          <h2>${Convertor(usd)}</h2>
        </div>
        <div>
          Wrapped Bitcoin Dominance
          <h2>76.92%</h2>
        </div>
      </div>
    </>
  );
}

export default ParticularHightlights;
