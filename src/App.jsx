// import ExportDisplayPage from "./Components/mainPage.jsx";
import "bootstrap/dist/css/bootstrap.css";
import AppNavbar from "./Components/Navbar.jsx";
import HomePage from "./Components/Homepage.jsx";
// import DisplayDiv from "./Components/mainPage.jsx";
import("./assets/navbar.css");
import("./assets/homepage.css");

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <HomePage/>
    </div>
  );
}

export default App;
