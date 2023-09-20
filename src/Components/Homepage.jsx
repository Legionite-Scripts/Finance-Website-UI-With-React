import React from "react";
import paymentImage from "./images/image-1.jpg";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function HomePage() {
  return (
    <div className="container" id="homePage">
      <div className="container" id="intro"></div>
      <div className="container" id="imageDiv">
        <img src={paymentImage} alt="Image For Payments" />
      </div>
    </div>
  );
}

export default HomePage;
