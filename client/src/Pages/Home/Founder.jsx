import React from "react";
import "./Home.css";
function Founder() {
  return (
    <div className="container smallabt" align="center">
      <div>
        <img
          src={require("./assets/rand_guy.jpg")}
          alt=""
          className="abtImg"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className="abtContent">
        <br />
        <br />
        <h1>Our Honourable Founder</h1>
        <br />
        <p>
          KEC hospital is the leading Erode hospital founded by P.Sathiyamoorthy
          and Binny Bansal in 2015. The hospital is headquartered in Erode,
          India. We have won many awards for our programme in saving multipe
          lives during crisis. This Indian hospital has brought a revolution in
          the Indian medicine industry.
        </p>
      </div>
    </div>
  );
}
export default Founder;
