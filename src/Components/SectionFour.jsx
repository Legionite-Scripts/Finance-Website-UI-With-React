import React,{useEffect} from "react";
import paymentImage from "./images/image-4.jpg";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS


function SectionFour() {

  return (
    <div className="container" id="sectionFour">
      <div className="container" id="sectionFourDetails">
        <h1 className="display-6">What our Users say about us.</h1>
        <div className="container" id="sectionFourInnerDetails">
          <p>
            I've been using Maxpay for a few months now, and I can't express how
            much it has transformed my financial life. Managing my money used to
            be a chore, but this app has made it a breeze.
          </p>
          <p>
            The budgeting features are incredibly intuitive, helping me set and
            achieve my financial goals effortlessly. I no longer worry about
            overspending or missing bill payments. The real-time insights into
            my investments have also been a game-changer. I can make informed
            decisions and track the performance of my portfolio with ease.
        
          </p>
          <button className="btn btn-success" id="purchaseBtn">Purchase Now</button>
        </div>
      </div>
      <div className="container" id="sectionFourImageDiv">
        <img src={paymentImage} alt="Cash - Image" className="img-fluid"/>
      </div>
    </div>
  );
}

export default SectionFour;
