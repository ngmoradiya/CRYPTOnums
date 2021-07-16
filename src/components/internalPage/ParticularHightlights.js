import React from "react";

function ParticularHightlights() {
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
          <h2>255,549</h2>
        </div>
        <div>
          USD Value
          <h2>$8.17B</h2>
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
