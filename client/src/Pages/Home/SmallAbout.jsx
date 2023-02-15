import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
function SmallAbout() {
  return (
    <div className="container smallabt" align="center">
      <div width="50%">
        <img src={require("./assets/hosp.jpg")} alt="" className="abtImg" />
      </div>
      <div className="abtContent">
        <h1>About Us</h1>
        <p>
          KG Hospital, a quaternary care, multispecialty hospital has been at
          the cutting edge of medicine while staying true to its charitable
          mission and providing advanced yet affordable healthcare since 1974.
        </p>
      </div>
    </div>
  );
}
export default SmallAbout;
