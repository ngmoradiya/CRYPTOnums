import React from "react";
import "./style.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div style={{ paddingTop: "20px" }}>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand
            className="margin-left-right"
            style={{ paddingTop: "0px" }}
          >
            <Link
              style={{ textDecoration: "none", cursor: "pointer" }}
              to={"/"}
            >
              <img src="./images/logo.png" height={50} alt="logo.png" />
            </Link>
            <div style={{ fontSize: "15px", marginLeft: "40px" }}>
              Number that make sense
            </div>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/rate" className="margin-left-right">
              CryptoCurrencies
            </Nav.Link>
            <Nav.Link href="#DeFi" className="margin-left-right">
              DeFi
            </Nav.Link>
            <Nav.Link href="#Blockchain" className="margin-left-right">
              Blockchain
            </Nav.Link>
            <Nav.Link href="#Exchanges" className="margin-left-right">
              Exchanges
            </Nav.Link>
            <Nav.Link href="#News" className="margin-left-right">
              News
            </Nav.Link>
            <Nav.Link href="#Feedback" className="margin-left-right">
              Feedback
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
