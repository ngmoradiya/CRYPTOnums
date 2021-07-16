import React from "react";

function About({ data }) {
  return (
    <>
      <div className="box-shadow-effect">
        <h1 style={{ fontSize: "1.5rem", color: "#A78BFA" }}>
          About {data?.name}
        </h1>
        <p>{data.description}</p>
      </div>
    </>
  );
}

export default About;
