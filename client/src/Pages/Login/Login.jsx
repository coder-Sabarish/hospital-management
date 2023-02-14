import React from "react";
//import Navbar from "../../components/navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";

function Login() {
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
          >
            <h2 style={{ color: "blue" }}>Login</h2>
            <br />
            <br />

            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="password" placeholder="Enter Password" />
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
