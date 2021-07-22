import React from "react";
import DefiRateTable from "./DefiRateTable";

function DefiRate() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Crypto Lending Interest Rates for July 2021
      </h1>
      <h4 style={{ textAlign: "center", padding: "2%" }}>Current Rate</h4>
      <DefiRateTable />
    </div>
  );
}

export default DefiRate;
