import React from "react";
import "./Login.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//import Navbar from "../../components/navbar";
const Signup = () => {
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
          >
            <h2 className="title">Signup</h2>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Mobile Number" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Aadhar Number" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="password" placeholder="re-enter Password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <DropdownButton variant="outline-secondary" title="Gender">
                <Dropdown.Item href="#">Male</Dropdown.Item>
                <Dropdown.Item href="#">Female</Dropdown.Item>
                <Dropdown.Item href="#">Others</Dropdown.Item>
              </DropdownButton>
            </Form.Group>
            <Form.Group className="mb-3" style={{ display: "inline" }}>
              <Form.Label>
                Do you have an <strong>Insurance?</strong>
              </Form.Label>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Form.Check
                  name="insurance"
                  aria-label="radio 1"
                  type="radio"
                  label="Yes"
                />
                <Form.Check
                  name="insurance"
                  aria-label="radio 1"
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
