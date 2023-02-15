import React from "react";
//import Navbar from "../../components/navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();
  const handleSubmit = async(event) => {
    event.preventDefault();
    const LoginResponse = await fetch('http://localhost:5000/auth/login',{
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ 
        "email" : event.target.email.value,
        "password" : event.target.password.value
      })
    });
        const LoggedIn = await LoginResponse.json();
        if(!LoggedIn.msg){
          localStorage.setItem("userProfile", JSON.stringify(LoggedIn.token));
          console.log(JSON.parse(localStorage.getItem('userProfile')));
          navigate("/home");
         }
         else{
          document.getElementById("warning").style.display="block";
          console.log(LoggedIn.msg);
         }
  };

  return (
    <div>
      {/* <Navbar/> */}
      <div className="content">
        <div className="sep">
          <form
            style={{
              padding: "3%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "1em",
            }}
            onSubmit={(handleSubmit)}
          >
            <h2 style={{ color: "blue" }}>Login</h2>
            <br />
            <br />

            <p id="warning">Invalid credintials</p>
            <Form.Group className="mb-3">
              <Form.Control name="email" type="email" placeholder="Email Address" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control name="password" type="password" placeholder="Enter Password" />
            </Form.Group>

            <a href="http://www.google.com">forgot password</a>
            <br />
            <br />

            <Button variant="primary" type="submit">
              Sign in
            </Button>
          </form>
        </div>
        <div className="half imginary" />
      </div>
    </div>
  );
}
export default Login;
