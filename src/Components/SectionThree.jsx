import React,{useEffect} from "react";
import paymentImage from "./images/image-3.jpg";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function SectionThree() {


  return (
    <div className="container" id="sectionThree">
      <div className="container" id="sectionThreeImageDiv">
        <img src={paymentImage} alt="Credit Card Image" />
      </div>
      <div className="container" id="sectionThreeDetails">
        <h1 className="display-6">Why choose Maxpay</h1>
        <div className="container" id="innerDetails">
          <p>Discover the features that set us apart : </p>
          <li>
            Intuitive Dashboard : Get a comprehensive view of your financial
            portfolio.
          </li>
          <li>
            Smart Budgeting : Effortlessly manage your expenses and saving
            goals.
          </li>
          <li>
            Investment Insights : Make informaed decisions with our real-time
            market data.
          </li>
          <li>Secure Transactions : Rest easy with bank level security.</li>
          <li>
            24/7 Support : Our dedicated team is here to assist you at anytime.
          </li>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
