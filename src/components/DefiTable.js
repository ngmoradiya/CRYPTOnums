import axios from "../axios";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

function DefiTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get("protocols/")
      .then((data) => setTableData(data.data))
      .catch((err) => console.log(err));
  }, []);

  const heading = ["#", "Name", "Chain", "Category", "Locked(USD)", "1Day%"];

  const title = (item) => <th>{item}</th>;

  const tdata = (t, i) => (
    <tr className="box-shadow-effect" style={{ marginBottom: "5px" }}>
      <td>{i + 1}</td>
      <td>{t.name ? t.name : "NIL"}</td>
      <td>{t.chain ? t.chain : "NIL"}</td>
      <td>{t.category ? t.category : "NIL"}</td>
      <td>{t.tvl ? t.tvl : "X"}</td>
      <td>NIL</td>
    </tr>
  );

  return (
    <div style={{ overflow: "auto", paddingTop: "10px" }}>
      <Table style={{ backgroundColor: "white" }}>
        <thead className="box-shadow-heading">
          <tr>{heading.map(title)}</tr>
        </thead>
        <br />
        {tableData.length > 0 ? <tbody>{tableData.map(tdata)}</tbody> : null}
      </Table>
    </div>
  );
}

export default DefiTable;
