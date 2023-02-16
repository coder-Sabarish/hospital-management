import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookingForm.css';


import Select from 'react-select';
import { useRef,useState } from 'react';

const Bookingform=()=>{

    const Gender = [
        { label: "Male", value: 1 },
        { label: "Female", value: 2 },
        { label: "Others", value: 3 },
      ];
      const [setDate] = useState('');
      const dateInputRef = useRef(null);
      const handleChange = (e) => {setDate(e.target.value);};
    const Branch = [
        { label:"General", value: 12},
        { label:"Cardiology", value: 13},
        { label:"Gastroenterology", value: 14},
        { label:"Nephrology", value: 15},
        { label:"Gynaecology", value: 16},

    ];
    

    return(
        <>
        
        <section id="section" className=" form-wrapper">
            <div className="row container">
                <div className="col-25 col-15 col-md-15 col-lg-15">
                <h3>Appointment Booking</h3>
            <form className="col-md-12" >
                <h5>Basic Information</h5>
                
                <label className="name">Name: <input className="form-control" type="text" name="Name" ></input></label>
                <br></br>
                <label className="dof">D.O.B <div><input className="form-control" type="date"onChange={handleChange}ref={dateInputRef}/>
                </div></label>
                <div className="form-group1">
                    <label >Gender</label>
                    <Select className="form-control" options={Gender} />
                </div>
                <div className="form-group2">
                    <label >Select the Branch</label>
                    <Select className="form-control" options={Branch} />
                </div>
                <div className="form-group3">
                    <label >Select the Doctor</label>
                    <Select className="form-control" options={Branch} />
                </div>
                <br></br>
                
            </form>
                </div>
            
            </div>
        </section>
        
        </>
    )

}
export default Bookingform;