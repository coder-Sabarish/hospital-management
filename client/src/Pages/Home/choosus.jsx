import React from "react";
import "./Home.css";
function ChooseUs() {
  return (
    <div className="chooseUs container">
      <br />
      <h1>Why choose Us?</h1>
      <br />
      <br />
      <p style={{ margin: "5px 25% 5% 25%" }}>
        We offer{" "}
        <strong>
          compassionate, ethical <em>&</em> state-of-the-art
        </strong>{" "}
        healthcare services and have been trusted by millions over the past{" "}
        <strong>48 years.</strong>
      </p>
      <img src={require("./assets/celeb.jpeg")} alt="Celebreation img" />
      <br />
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <span>
            <img alt="docIcon" src={require("./assets/care.jpeg")}></img>
            <h3>6000000</h3>
            <p>Patients</p>
          </span>
        </div>
        <div>
          <span>
            <img alt="docIcon" src={require("./assets/doc.jpeg")}></img>
            <h3>35 doctors</h3>
            <br />
          </span>
        </div>
        <div>
          <span>
            <img alt="docIcon" src={require("./assets/patienticon.jpeg")}></img>
            <h3>Advanced Care</h3>
            <br />
          </span>
        </div>
        <div>
          <span>
            <img alt="docIcon" src={require("./assets/nabl.jpeg")}></img>
            <h4 style={{ color: "black" }}>NABL & NABH</h4>
            <p>Accredited hospitals</p>
          </span>
        </div>
      </div>
    </div>
  );
}
export default ChooseUs;
