import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Graph from "../Graph";
import About from "./About";
import Stats from "./Stats";
import Extras from "./Extras";
import Highlights from "./ParticularHightlights";
import CoinCategory from "./CoinCategory";
import Table from "./InternalTable";

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
        if (data && data.tokensInUsd && data.tokensInUsd.length > 0) {
          const tokens = data.tokensInUsd[data.tokensInUsd.length - 1].tokens;
          const topTokens = [];
          for (let x in tokens) topTokens.push([x, tokens[x].toFixed(2)]);
          topTokens.sort((a, b) => b[1] - a[1]);
          topTokens.splice(10);
          setTopTenTokens(topTokens);
          // console.log(topTokens);
        }

        const settingData = data.tvl.map((item, index) => ({
          ...item,
          date: new Date(data.tvl[index].date * 1000).toLocaleString(),
        }));

        console.log(settingData);
        setGraphData(settingData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [name]);

  return (
    <>
      <div className="container" style={{ padding: "0px" }}>
        <div className="row">
          <div className="col-sm-9">
            <CoinCategory />
            <Highlights />
            <Graph graphData={graphData} label={name} />
          </div>
          <div className="col-sm-3">
            <Extras />
          </div>
        </div>
      </div>
      <Stats data={data} topTenTokens={topTenTokens} />
      <About data={data} />
      <Table tableData={graphData} />
    </>
  );
};

export default Particular;
