import React from "react";
import { useState } from "react";
import "./radio.css";

function Radio() {
  const [topping, setTopping] = useState("Medium");

  const onOptionChange = (e) => {
    setTopping(e.target.value);
  };
  return (
    <div className="App">
      <input
        type="radio"
        name="topping"
        value="Regular"
        id="regular"
        checked={topping === "Regular"}
        onChange={onOptionChange}
      />
      <label htmlFor="regular">New Patient</label>

      <input
        type="radio"
        name="topping"
        value="Medium"
        id="medium"
        checked={topping === "Medium"}
        onChange={onOptionChange}
      />
      <label htmlFor="medium">Registered Patient</label>
    </div>
  );
}

export default Radio;