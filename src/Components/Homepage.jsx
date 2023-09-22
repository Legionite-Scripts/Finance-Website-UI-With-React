import React, { useEffect } from "react";
import paymentImage from "./images/image-1.jpg";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS


function HomePage() {


  let headingText = "Transforming finance for a better tomorrow";
  let introductionText =
    "At Maxpay, we're on a mission to streamline your financial journey. Our innovative tools and services are designed to empower you, whether you're a seasoned investor or just starting your financial journey.";

  return (
    <div className="container" id="homePage">
      <div className="container" id="intro">
        <div id="separation" className="container">
          <h1 className="display-6" id="header">
            {headingText}
          </h1>
          <p id="introText">{introductionText}</p>
        </div>
        <div className="container" id="buttonDiv">
          <a href="#">
            <button id="btn-get-started">Get Started</button>
          </a>
          <a href="#">
            <button id="btn-learn-more">Learn More</button>
          </a>
        </div>
      </div>
      <div className="container" id="imageDiv">
        <img src={paymentImage} alt="Image For Payments" />
      </div>
    </div>
  );
}

export default HomePage;
