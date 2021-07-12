import React from "react";

import Highlights from "./Highlights";
import Addon from "./Addon";
import Category from "./Category";
import Graph from "./Graph";

function Main() {
  return (
    <>
    <div className="container" style={{ paddingBottom: "20px" }}>
      
      <p style={{ marginTop: "2%", textAlign: "center" }}>
        Numbers that make sense, CRYPTO nums tracks entire crypto industry data
        in real time and bring to you only those numbers that help you make
        decision or understand the trend better
      </p>
      <Highlights />
      <Graph />
      <Addon />
      <Category />
    </div>
    </>
  );
}

export default Main;
