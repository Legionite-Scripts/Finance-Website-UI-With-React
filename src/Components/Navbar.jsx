// src/components/Navbar.js

import React,{useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"; // Import Bootstrap components
import AOS from "aos";
import "aos/dist/aos.css";


function AppNavbar() {

  
  return (
    <div className="container" id="mainContainer">
      <Navbar expand="lg" variant="dark" id="mainNav" className="container">
        <Container id="navMain">
          <Navbar.Toggle aria-controls="navbar-nav" id="toggleBtn" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto" id="links">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="nav-dropdown">
                <NavDropdown.Item href="/item1">Item 1</NavDropdown.Item>
                <NavDropdown.Item href="/item2">Item 2</NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="container" id="logoDiv">
            <Navbar.Brand href="/" id="logo">
              MaxPay
            </Navbar.Brand>
            <a href="#">
              <button id="signupBtn" className="btn btn-success">
                Sign Up
              </button>
            </a>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
