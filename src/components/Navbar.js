import React from "react";
import "./style.css";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <div style={{ paddingTop: "20px" }}>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto margin-left">
            <Nav.Link href="#CryptoCurrencies" className="margin-left-right">
              CryptoCurrencies
            </Nav.Link>
            <Nav.Link href="#DeFi" className="margin-left-right">
              DeFi
            </Nav.Link>
            <Nav.Link href="#Blockchain" className="margin-left-right">
              Blockchain
            </Nav.Link>

            <Navbar.Brand
              href="#CryptoCurrencies"
              className="margin-left-right"
            >
              CRYPTO NUMS
            </Navbar.Brand>

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
