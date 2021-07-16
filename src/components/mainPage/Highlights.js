import React from "react";
import "../style.css";
import { Card } from "react-bootstrap";
import { useData } from "../../contexts/globalState";

function Highlights() {
  const { totalValue, maxDetails } = useData();
  // console.log(state.totalValue,"aa gaya")
  return (
    <div className="row">
      <div className="col-md-4 mb-2">
        <Card className="card-item-center">
          <Card.Body>
            <Card.Title>Total Value Locked</Card.Title>
            <Card.Text>
              <h1 style={{ color: "#5f1ec7" }}>$ {totalValue.toFixed(2)} B</h1>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-4 mb-2">
        <Card className="card-item-center">
          <Card.Body>
            <Card.Title>{maxDetails.name} Dominance</Card.Title>
            <Card.Text>
              <h1 style={{ color: "#1ec7c7" }}> {maxDetails.percentage} %</h1>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-4 mb-2">
        <Card className="card-item-center">
          <Card.Body style={{ paddingBottom: "12px" }}>
            <Card.Title>DeFi Pulse Index</Card.Title>
            <Card.Text>
              <h1 style={{ color: "#c71eb9", marginBottom: "-2px" }}>342.26</h1>
              <div style={{ fontSize: "10px" }}>
                Available for <u>TokenSet</u>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Highlights;
