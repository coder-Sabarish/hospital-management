import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
function Login() {
  return (
    <div className="content">
      <div
        className="sep"
        style={{ backgroundColor: "white", border: "none", borderRadius: "0%" }}
      >
        <Form className="sep">
          <br />

          <h2 style={{ color: "blue" }}>Login</h2>
          <br />
          <br />

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="email address"
              style={{ backgroundColor: "white", border: "none" }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Enter Password"
              style={{ backgroundColor: "white", border: "none" }}
            />
          </Form.Group>

          <a href="http://www.google.com">forgot password</a>
          <br />
          <br />

          <Button variant="primary" type="submit">
            Sign in
          </Button>
        </Form>
      </div>
      <div className="half imginary" />
    </div>
  );
}
export default Login;
