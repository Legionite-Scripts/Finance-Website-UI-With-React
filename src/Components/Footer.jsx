import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS


function Footer() {


  return (
    <Container id="footer" >
      <h1>MaxPay</h1>
      <div className="container" id="footerInnerDiv">
        <p>@MaxPay</p>
        <button className="btn btn-success">Sign Up</button>
      </div>
      <hr />
      <div className="container" id="linksAndIcons">
        <div className="container" id="links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="container" id="icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
