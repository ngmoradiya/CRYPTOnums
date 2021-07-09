import React from "react";
import "./style.css";
import { Card, Button } from "react-bootstrap";

function Addon() {
  return (
    <div>
      <Card className="margin-top-bottom">
        <Card.Body style={{ padding: "5px" }}>
          <div className="row">
            <div className="col-md-10">
              <Card.Text>
                <p style={{ fontSize: "20px", marginBottom: "-2px" }}>
                  &emsp;Discover why traders are choosing BTC2X-FLI
                </p>
              </Card.Text>
            </div>
            <div className="col-md-2">
              <h4 style={{ color: "#f0ab0a" }}>Learn more</h4>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card className="margin-top-bottom">
        <Card.Body style={{ backgroundColor: "#9bd8f2" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-7">
                <Card.Title>
                  <h2>DeFi Pulse Farmer Newsletter</h2>
                </Card.Title>
                <Card.Text>
                  <p style={{ fontSize: "12px", marginBottom: "0px" }}>
                    Find weekly trends on the latest yield farming opportunities
                    along with an overview of the top stories in DeFi!
                  </p>
                </Card.Text>
              </div>
              <div className="col-md-3 margin-top-bottom">
                <Button style={{ backgroundColor: "#6f63f2" }}>
                  Sign Up Today!
                </Button>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Addon;
