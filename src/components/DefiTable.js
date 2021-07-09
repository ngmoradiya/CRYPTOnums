import React from "react";
import { Table } from "react-bootstrap";

function DefiTable() {
  var heading = ["#", "Name", "Chain", "Category", "Locked(USD)", "1Day%"];
  var data = [
    ["1", "Aave", "MultiChain", "Leading", "$10.73 B", "-9.35%"],
    ["2", "Aave", "MultiChain", "Leading", "$10.73 B", "-9.35%"],
    ["3", "Aave", "MultiChain", "Leading", "$10.73 B", "-9.35%"],
    ["4", "Aave", "MultiChain", "Leading", "$10.73 B", "-9.35%"],
    ["5", "Aave", "MultiChain", "Leading", "$10.73 B", "-9.35%"],
  ];
  const title = (item) => <th>{item}</th>;
  const rdata = (d, i) => <td key={i}>{d}</td>;
  const tdata = (t) => (
    <tr className="box-shadow-effect" style={{ marginBottom: "5px" }}>
      {t.map(rdata)}
    </tr>
  );
  return (
    <div style={{ overflow: "auto", paddingTop: "10px" }}>
      <Table style={{ backgroundColor: "white" }}>
        <thead className="box-shadow-heading">
          <tr>{heading.map(title)}</tr>
        </thead>
        <br />
        <tbody>{data.map(tdata)}</tbody>
      </Table>
    </div>
  );
}

export default DefiTable;
