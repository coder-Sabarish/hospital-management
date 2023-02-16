import React from "react";
import "./Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Validate from "./Validate"

const Signup = () => {

  const navigate = useNavigate();

  const validate = (event) => {
    /* validation here */
    handleSubmit(event);
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (!Validate(event)) {
      return ;
    }
    else{
        const SignupResponse = await fetch('http://localhost:5000/auth/signup',{
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ 
          "name" : event.target.name.value,
          "mobile_numer" : event.target.mobile_numer.value,
          "aadhar_number" : event.target.aadhar_number.value,
          "email" : event.target.email.value,
          "password" : event.target.password.value,
          "gender" : event.target.gender.value,
          "has_insurence" : event.target.insurance.value==="yes"? true:false
        })
      });
          const SignedUp = await SignupResponse.json();
          if(!SignedUp.error){
            console.log(SignedUp);
            navigate("/login");
          }
          else{
            console.log(SignedUp.error)
          }
    }
    
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="content">
        <div className="sep" style={{}}>
          <Form
            style={{
              padding: "3%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "1em",
            }}
            onSubmit={(validate)}
          >
            <h2 className="title">Signup</h2>
            <Form.Group className="mb-3">
              <Form.Control name="name" type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control name="mobile_numer" type="text" placeholder="Mobile Number" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control name="aadhar_number" type="text" placeholder="Aadhar Number" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control name="email" type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control name="Name" type="password" placeholder="re-enter Password" />
            </Form.Group>
            <Form.Group className="mb-3" style={{ display: "inline" }}>
              <Form.Label style={{display:"inline"}}>Gender : </Form.Label>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Form.Check name="gender" value="male" type="radio" label="male"/>
                <Form.Check name="gender" value="female" type="radio" label="female"/>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" style={{ display: "inline" }}>
              <Form.Label>
                Do you have an <strong>Insurance?</strong>
              </Form.Label>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Form.Check
                  name="insurance"
                  value="yes"
                  type="radio"
                  label="Yes"
                />
                <Form.Check
                  name="insurance"
                  value="no"
                  type="radio"
                  label="No"
                />
              </div>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <br />
            <a href="Already have an account?">Already have an account?</a>
          </Form>
        </div>
        <div className="half imginary" />
      </div>
    </div>
  );
};

export default Signup;
