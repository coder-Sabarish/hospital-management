// import React from "react";
// import './Booking.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from "../../Components/Navbar/navbar";
// import Radio from "../../Components/Radio/Radio";
// import Select from 'react-select';


// const Booking=()=>{
//     const Gender = [
//         { label: "General", value: 355 },
//         { label: "Cardio", value: 54 },
//         { label: "Neural", value: 43 },
//       ];
    //   let doctors=[];
    //   const doctorNames=[];
    //   let selectedDoctor="";
    //   let Dates=[];

    //   const handleBooking = async (options) => {

    //     const token = localStorage.getItem("userProfile");
    //     await fetch('http://localhost:5000/booking/getdoctors',{
    //       method: 'get',
    //       headers: {
    //          Authorization: `Bearer ${token}`,
    //         'Accept': 'application/json',
    //         'Content-type': 'application/json',
    //         "speciality" : options.label,
    //       },
    //     }).then(response => 
    //         response.json().then(data => ({
    //             data: data,
    //             status: response.status
    //         })
    //     ).then(res => {
            
    //         for(let i=0;i<res.data.length;++i){
    //             doctors.push(res.data[i]);
    //             doctorNames.push({label:res.data[i].name, value:i});
    //         }
    //         console.log(doctors)
    //     }));
    // }

    // const selectDoc = () => {
    //     if(doctorNames.length===0) {
    //         alert("First select the catagery.");
    //         return;
    //     } 
    // }

    // const selectDoctor = (options) => {
    //     selectedDoctor = doctors[options.value];
    //     Dates=[];
    //     const tem = document.getElementById("msg");
    //     tem.innerHTML=`you can visit Dr.${selectedDoctor.name} at ${selectedDoctor.availabile_time.from} - ${selectedDoctor.availabile_time.to}`
    //     let currhour=new Date().getHours();
    //     console.log(new Date());
    //     if(currhour<parseInt(selectedDoctor.availabile_time.from.substring(0,2))-2){
    //         let date = new Date();
    //         let date1 = date.setDate(date.getDate() + 1);
    //         let date2 = date.setDate(date.getDate() + 2);
    //         Dates.push({label: date.getDate+date.getMonth+date.getFullYear}); Dates.push({label:date1.getDate+date1.getMonth+date1.getFullYear}); Dates.push({label: date2.getDate+date2.getMonth+date2.getFullYear});
    //     }
    //     else{
    //         let date = new Date();
    //         Dates.push({label:date.setDate(date.getDate() + 1)}); Dates.push({label: date.setDate(date.getDate() + 2)}); Dates.push({label: date.setDate(date.getDate() + 3)});
    //     }
    //     console.log(Dates);
    // }

//     return(
//         <>
//         <Navbar/>
//         <section>
//             <h3>Appointment Booking</h3>
//             <form>
//                 <h5>Basic Information</h5>
//                 <Radio/>
//                 <label>Name: <input type="text" name="Name" ></input></label>
//                 <label>Phone: <input type="number" ></input></label>
//                 <div className="form-group">
//                     <label>Gender</label>
//                 <select>
//                   <option value="select">Select</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="transgender">Transgender</option>
//                 </select>
//                 </div>
//                 <div className="form-group">
//                     <label>Select the Doctor</label>
//                 <Select id="speciality" onChange={handleBooking} options={Gender} />
//                 <Select id="doctor" onMenuOpen={selectDoc} onChange={selectDoctor} options={doctorNames} />
//                 <Select id="date" options={Dates} />
//                 </div>
//                 <p id="msg"></p>
//             </form>
//         </section>
//         </>
//     )

// }
// export default Booking;


// import React from "react";
// import './Booking.css';
// import Navbar from "../../Components/Navbar/navbar";
// import Bookingform from "./Form";
// import Popup from 'reactjs-popup';


// const Booking = () => {
  
//   return (
//     <>
//       <Navbar />
//       <Popup trigger={<button className="pop">Booking</button>} position="bottom center"><Bookingform/></Popup>
      
//     </>
//   );
// };
// export default Booking;

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Booking.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Select from 'react-select';
import { useNavigate } from "react-router-dom";

const Bookingform=()=>{

  const navigate = useNavigate();
    const Gender = [
        { label: "Male", value: 1 },
        { label: "Female", value: 2 },
        { label: "Others", value: 3 },
      ];
    const Branch = [
        { label:"General", value: 12},
        { label:"Cardiology", value: 13},
        { label:"Gastroenterology", value: 14},
        { label:"Nephrology", value: 15},
        { label:"Gynaecology", value: 16},

    ];

      let doctors=[];
      const doctorNames=[];
      let selectedDoctor="";
      const dates=[];

      const handleBooking = async (options) => {

        const token = localStorage.getItem("userProfile");
        await fetch('http://localhost:5000/booking/getdoctors',{
          method: 'get',
          headers: {
             Authorization: `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-type': 'application/json',
            "speciality" : options.label,
          },
        }).then(response => 
            response.json().then(data => ({
                data: data,
                status: response.status
            })
        ).then(res => {
            
            for(let i=0;i<res.data.length;++i){
                doctors.push(res.data[i]);
                doctorNames.push({label:res.data[i].name, value:i});
            }
            console.log(doctors)
        }));
    }

    const selectDoc = () => {
      if(doctorNames.length===0) {
          alert("First select the catagery.");
          return;
      } 
  }
  const selectDate = () => {
    console.log(dates);
      if(dates.length===0) {
          alert("First select the Doctor.");
          return;
      } 
  }

    const selectDoctor = (options) => {
        selectedDoctor = doctors[options.value];
        const tem = document.getElementById("msg");
        tem.innerHTML=`you can visit Dr.${selectedDoctor.name} at ${selectedDoctor.availabile_time.from} - ${selectedDoctor.availabile_time.to}`
        let currhour=new Date().getHours();
        console.log(new Date());
        if(currhour<parseInt(selectedDoctor.availabile_time.from.substring(0,2))-2){
            let date = new Date();
            dates.push({label: date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear(), value:1}); dates.push({label: (date.getDate()+1)+"/"+date.getMonth()+"/"+date.getFullYear(), value:2}); dates.push({label: (date.getDate()+2)+"/"+date.getMonth()+"/"+date.getFullYear(), value:3});
        }
        else{
            let date = new Date();
            dates.push({label: date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear(), value:1}); dates.push({label: (date.getDate()+1)+"/"+date.getMonth()+"/"+date.getFullYear(), value:2}); dates.push({label: (date.getDate()+2)+"/"+date.getMonth()+"/"+date.getFullYear(), value:3});
        }
        document.getElementById("Date").style.display="block";
    }

    const enablesubmit = () => {
      document.getElementById("submit").disabled=false;
    }
    
    const handlesubmit = async (event) => {
      event.preventDefault();
      const token = localStorage.getItem("userProfile");
      await fetch('http://localhost:5000/booking',{
          method: 'post',
          headers: {
             Authorization: `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ 
            "name" : event.target.name.value,
            "gender" : event.target.gender.value,
            "dob" : event.target.dob.value,
            "branch" : event.target.branch.value,
            "doctor" : event.target.doctor.value,
            "booking_date" : event.target.date.value,
          })
        }).then(response => 
          response.json().then(data => ({
              data: data,
              status: response.status
          })
      ).then(res => {
        if(res.data.res===true){
          alert(`Your appointment is booked you can visit the doctor at ${selectedDoctor.availabile_time.from} - ${selectedDoctor.availabile_time.to}`);
          navigate("/home");
        }
          console.log(res.data)
      }));
    }

    return(
        <>
          <Form className="booking" onSubmit={handlesubmit}>
            <h2 className="title">Book you Appointment</h2>
            <Form.Group className="mb-3">
              <Form.Control name="name" type="text" placeholder="Patient Name" required/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Select name="gender" className="form-control" options={Gender} placeholder="Gender" required/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control name="dob" type="text" placeholder="Date of birth : DD/MM/YYYY" required/>
            </Form.Group>
            <Form.Group className="mb-3">
            <Select name="branch" className="form-control" onChange={handleBooking} options={Branch} placeholder="Select Branch"/>
            </Form.Group>
            <Form.Group className="mb-3">
            <Select name="doctor" className="form-control" onMenuOpen={selectDoc} onChange={selectDoctor} options={doctorNames} placeholder="Select Doctor"/>
            </Form.Group>
            <p id="msg"></p>
            <Form.Group id="Date" className="mb-3 date">
            <Select name="date" className="form-control" onMenuOpen={selectDate} onChange={enablesubmit} options={dates} placeholder="Select Date"/>
            </Form.Group>
            <Button id="submit" variant="primary" type="submit" disabled>
              Submit
            </Button>
          </Form>
        </>
    )

}
export default Bookingform;