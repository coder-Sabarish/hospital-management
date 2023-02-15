import React from "react";
import './Booking.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../Components/Navbar/navbar";
import Radio from "../../Components/Radio/Radio";
import MyDropdown from "../../Components/Dropdown/Dropdown"
import { handleBooking } from "./handleBooking";
import Select from 'react-select';


const Booking=()=>{
    const Gender = [
        { label: "Male", value: 355 },
        { label: "Female", value: 54 },
        { label: "Others", value: 43 },
      ];

    return(
        <>
        <Navbar/>
        <section>
            <h3>Appointment Booking</h3>
            <form>
                <h5>Basic Information</h5>
                <Radio/>
                <label>Name: <input type="text" name="Name" ></input></label>
                <label>Phone: <input type="number" ></input></label>
                <div className="form-group">
                    <label>Gender</label>
                <select>
                  <option value="select">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="transgender">Transgender</option>
                </select>
                </div>
                <div className="form-group">
                    <label>Select the Doctor</label>
                <Select onChange={handleBooking} options={Gender} />
                </div>
                <MyDropdown/>
            </form>
        </section>
        </>
    )

}
export default Booking;