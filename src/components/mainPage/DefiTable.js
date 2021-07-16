import axios from "../../axios";
import React, { useEffect } from "react";
import MaterialTable from "material-table";

import { useData } from "../../contexts/globalState";
import { Link } from "react-router-dom";
function DefiTable() {
  const { setTotal, setMax, category, tableData, setTableData } = useData();

  const columns = [
    {
      title: "S.No",
      field: "sNo",
    },
    {
      title: "Name",
      field: "name",
      render: (rowData) => (
        <Link
          style={{ textDecoration: "none", cursor: "pointer", color: "black" }}
          to={`/${rowData.name}`}
        >
          {rowData.name}
        </Link>
      ),
    },
    {
      title: "Chain",
      field: "chain",
    },
    {
      title: "Category",
      field: "category",
    },
    {
      title: "Locked(USD)",
      field: "tvl",
    },
    {
      title: "1Day(%)",
      field: "oneday",
      render: (rowData) => {
        const percent = Number(
          rowData.oneday.substring(0, rowData.oneday.length - 1)
        );
        return percent < 0 ? (
          <div style={{ color: "red" }}>{rowData.oneday}</div>
        ) : (
          <div style={{ color: "green" }}>{rowData.oneday}</div>
        );
      },
    },
  ];

  const options = {
    pageSize: 20,
  };

  const filterDataDataByCategory = (tableData, category) => {
    if (category) {
      const filteredData = tableData.filter(
        (item) => item.category === category
      );
      return filteredData;
    } else {
      return tableData;
    }
  };

  useEffect(() => {
    if (tableData.length > 0) {
      let sum = 0;
      let max = 0;
      let dominance = "";

      tableData.forEach((item) => {
        let amount;

        if (item.tvl !== 0) {
          amount = item.tvl.substring(0, item.tvl.length - 1);
        } else amount = 0;

        sum = sum + Number(amount);
        if (max < Number(amount)) {
          max = Number(amount);
          dominance = item.name;
        }
      });
      const percentage = ((max / sum) * 100).toFixed(2);

      setMax({ name: dominance, percentage });
      setTotal(sum);
    }
  }, [tableData, setMax, setTotal]);

  useEffect(() => {
    axios
      .get("protocols/all")
      .then((data) => {
        const nullRemoved = data.data.filter((item) => item !== null);
        const setData = nullRemoved.map((item, index) => {
          // console.log(typeof item.tvl.toString());
          if (item.tvl !== 0) {
            let amount = item.tvl.substring(0, item.tvl.length - 1);
            // console.log(typeof amount);
            let tvl = item.tvl.includes("M")
              ? (Number(amount) * 0.001).toFixed(6) + "B"
              : item.tvl.includes("K")
              ? (Number(amount) * 0.000001).toFixed(6) + "B"
              : item.tvl;
            // console.log(tvl);
            return {
              ...item,
              sNo: index + 1,
              oneday: item.changeInTvl,
              tvl: tvl,
            };
          }
          return { ...item, sNo: index + 1, oneday: item.changeInTvl };
        });
        // console.log(setData, "hhh");
        const sortedData = setData.sort(function (a, b) {
          if (a.tvl !== 0 && b.tvl !== 0)
            return (
              b.tvl.substring(0, b.tvl.length - 1) -
              a.tvl.substring(0, a.tvl.length - 1)
            );
          else return b - a;
        });

        const finalSet = sortedData.map((item, index) => ({
          ...item,
          sNo: index + 1,
        }));

        setTableData(finalSet);
      })
      .catch((err) => console.log(err));
  }, [setTableData]);

  const filteredData = filterDataDataByCategory(tableData, category);
  // console.log(tableData);
  return (
    <div style={{ overflow: "auto", paddingTop: "10px" }}>
      <MaterialTable
        data={filteredData}
        columns={columns}
        options={options}
        title="CryptoNums"
      />
    </div>
  );
}

export default DefiTable;
