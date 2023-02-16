import React from "react";
import "./Dept.css";
import data from "./exporter";
import ListIt from "./ListIt";
import Navbar from "./../../Components/Navbar/navbar"

function Department() {
  return (
    <div>
      <Navbar/>
      <div className="special">
        <h1>Our Departments</h1>
      </div>
      <div style={{ marginLeft: "15%", marginRight: "15%", padding: "2em" }}>
        <h2
          style={{
            color: "blue",
            height: "fitContent",
            paddingTop: "2em",
            paddingBottom: "1em",
          }}
        >
          We Specialize in
        </h2>
        <hr></hr>
        {data.map((x, ind) => {
          return <ListIt title={x.title} content={x.content} key={x.ind} />;
        })}
      </div>
    </div>
  );
}
export default Department;
