import React,{useEffect} from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS



function PurPleBG() {

  return (
    <Container id="purpleBg">
      <div className="container" id="innerDiv">
        <h1 className="display-6">Ready to take control of your finances?</h1>
        <p id="firstText">
          Join thousands of others who have embraced their freedom with MaxPay
        </p>
        <div className="container" id="freeDiv">
          <h1 className="display-6">Free</h1>
          <p>Registration</p>
        </div>

        <p id="lastText">Empowering Your Financial Future. </p>
        <button className="btn btn-success">Join Today</button>
      </div>
    </Container>
  );
}

export default PurPleBG;
