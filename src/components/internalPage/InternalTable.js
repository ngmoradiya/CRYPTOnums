import React from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";

function InternalTable({ tableData }) {
  const heading = [
    "Date",
    "TVL(USD)",
    "TVL Change",
    "Total ETH Locked",
    "ETH Locked 1d",
  ];

  const USD = (value) => {
    const Billion = 10 ** 9;
    const Million = 10 ** 6;
    const Thousand = 10 ** 3;

    if (value > Billion) {
      return "$" + (value / Billion).toFixed(2) + "B";
    } else if (value > Million) {
      return "$" + (value / Million).toFixed(2) + "M";
    } else if (value > Thousand) {
      return "$" + (value / Thousand).toFixed(2) + "K";
    } else {
      return "$" + value.toFixed(2);
    }
  };

  const th = heading.map((item) => <th>{item}</th>);
  const tb =
    tableData &&
    tableData.slice(tableData.length - 10).map((item, i) => {
      const data = [];
      data.push(<td>{item.date.split(",")[0]}</td>);
      data.push(<td>{USD(item.totalLiquidityUSD)}</td>);
      data.push(<td>-</td>);
      data.push(<td>-</td>);
      data.push(<td>-</td>);
      return <tr key={i}>{data}</tr>;
    });

  const { name } = useParams();
  return (
    <div>
      <h6>{name} Historical Stats</h6>
      <div className="table-responsive">
        <Table className="table-curved">
          <thead>
            <tr>{th}</tr>
          </thead>
          <tbody>{tb}</tbody>
        </Table>
      </div>
    </div>
  );
}

export default InternalTable;
