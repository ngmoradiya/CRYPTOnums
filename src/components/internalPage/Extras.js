import React from "react";

function Extras() {
  const links = ["link1", "link2", "link3", "link4"];
  const audits = [
    "audit1",
    "audit2",
    "audit3",
    "audit4",
    "audit5",
    "audit6",
    "audit7",
    "audit8",
  ];

  return (
    <>
      <div className="box-shadow-effect">
        <h4>Ecosystem links</h4>
        <ul style={{ textDecoration: "underline", listStyle: "none" }}>
          {links.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="box-shadow-effect">
        <h4>Audits</h4>
        <ul style={{ textDecoration: "underline", listStyle: "none" }}>
          {audits.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Extras;
