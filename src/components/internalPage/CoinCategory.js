import React from "react";
import "../style.css";
import { useParams } from "react-router-dom";

function CoinCategory() {
  const { name } = useParams();

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          className="box-shadow-effect"
          style={{ border: "none", width: "20%", fontWeight: "bold" }}
        >
          {name}
        </button>
        <button
          className="box-shadow-effect"
          style={{ border: "none", width: "20%" }}
        >
          Bitcoin
        </button>
        <button
          className="box-shadow-effect"
          style={{ border: "none", width: "20%" }}
        >
          Etherium
        </button>
        <button
          className="box-shadow-effect"
          style={{ border: "none", width: "20%" }}
        >
          XPS
        </button>
      </div>
    </>
  );
}

export default CoinCategory;
