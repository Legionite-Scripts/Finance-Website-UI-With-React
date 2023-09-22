import React, { useEffect } from "react";
import paymentImage from "./images/image-2.jpg";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "font-awesome/css/font-awesome.min.css"; //Import font-awesome CSS
import AOS from "aos";
import "aos/dist/aos.css";

function SectionTwo() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  let headingText = "Simplify your finances with Maxpay";
  let introductionText =
    "At Maxpay, we're on a mission to streamline your financial journey. Our innovative tools and services are designed to empower you, whether you're a seasoned investor or just starting your financial journey.";

  return (
    <div className="container" id="sectionTwo">
      <div className="container" id="sectionTwoIntro" data-aos="fade-right">
        <div className="container" id="sectionTwoSeparation">
          <h1 className="display-6" id="sectionTwoHeader">
            {headingText}
          </h1>
          <p id="sectionTwoInnerText">{introductionText}</p>
        </div>
        <div className="container" id="details">
          <div className="container" id="firstDetail">
            <i class="fa-solid fa-comments-dollar"></i>
            <h1>Smart Budgeting</h1>
            <p>Effortlessly manage your expenses and saving goals.</p>
          </div>
          <div className="container" id="secondDetail">
            <i class="fa-solid fa-file-pen"></i>
            <h1>Secure Transactions</h1>
            <p>Rest easy with bank level security.</p>
          </div>
        </div>
      </div>
      <div className="container" id="sectionTwoImageDiv">
        <img src={paymentImage} alt="E-Wallet Image" />
      </div>
    </div>
  );
}

export default SectionTwo;
