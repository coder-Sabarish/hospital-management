import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import ChooseUs from "./choosus";
import SmallAbout from "./SmallAbout";
import Founder from "./Founder";
import Navbar from "../../Components/Navbar/navbar";


function Home() {
  return (
    <div style={{ backgroundColor: "lightgrey" }}>
      <Navbar/>
      <br />
      <div className="emergence container">
        <h1>
          Medical Emergency <button> Call Us Now</button>
        </h1>
        <h1>
          Health Checkup Appointment <button> Book Now</button>
        </h1>
      </div>
      <br />
      <SmallAbout />
      <br />
      <ChooseUs />
      <br />
      <br />
      <Founder/>  
      <br />
      <footer class="text-center">
        <p>Copyright &copy; 2023 All rights reserved by KEC </p>
      </footer>
    </div>
  );
}
export default Home;
