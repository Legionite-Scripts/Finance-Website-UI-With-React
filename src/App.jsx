// import ExportDisplayPage from "./Components/mainPage.jsx";
import "bootstrap/dist/css/bootstrap.css";
import AppNavbar from "./Components/Navbar.jsx";
import HomePage from "./Components/Homepage.jsx";
import SectionTwo from "./Components/SectionTwo.jsx";
import SectionThree from "./Components/SectionThree.jsx";
import SectionFour from "./Components/SectionFour.jsx";
import PurPleBG from "./Components/PurpleBg.jsx";
import Footer from "./Components/Footer.jsx";

// import { ReactDOM } from "react";
// import DisplayDiv from "./Components/mainPage.jsx";
import("./assets/navbar.css");
import("./assets/homepage.css");
import("./assets/sectionTwo.css");
import("./assets/sectionThree.css");
import("./assets/sectionFour.css");
import("./assets/purpleBg.css");
import("./assets/footer.css");

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <HomePage />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <PurPleBG />
      <Footer />
    </div>
  );
}

export default App;
