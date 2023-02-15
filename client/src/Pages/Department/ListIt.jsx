import React from "react";
import "./Dept.css";
function ListIt(props) {
  return (
    <>
      <h4>{props.title}</h4>
      {props.content.map((x) => {
        return <p>{x}</p>;
      })}
    </>
  );
}
export default ListIt;
