import React from "react";
import "./style.css";
import { Card } from "react-bootstrap";
import Table from "./DefiTable";

function Category() {
  return (
    <div className="row g-2">
      <div className="col-sm-6">
        <div className="row g-2">
          <div className="col-sm-3">
            <Card className="card-item-center">
              <Card.Body style={{ padding: "7px 5px 3px 5px" }}>
                <h6>Lending</h6>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card className="card-item-center">
              <Card.Body style={{ padding: "7px 5px 3px 5px" }}>
                <Card.Text>
                  <h6>Dexes</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card className="card-item-center">
              <Card.Body style={{ padding: "7px 5px 3px 5px" }}>
                <Card.Text>
                  <h6>Derivatives</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card className="card-item-center">
              <Card.Body style={{ padding: "7px 5px 3px 5px" }}>
                <Card.Text>
                  <h6>Payments</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="row">
          <div className="col-sm-3 mb-2">
            <Card className="card-item-center">
              <Card.Body style={{ padding: "7px 5px 3px 5px" }}>
                <Card.Text>
                  <h6>Assets</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-9">
            <input
              type="text"
              placeholder="  Search"
              className="inputTag"
            ></input>
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
}

export default Category;
