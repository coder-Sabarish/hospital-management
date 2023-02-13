import React from "react";
import "./Signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Signup = () => {
  return (
    <div className="content">
      <div
        className="sep"
        style={{ backgroundColor: "white", borderRadius: "0%" }}
      >
        <Form className="sep">
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

          <Form.Group className="mb-3">
            <Form.Label>Do you have Insurence</Form.Label>
            <Form.Check
              name="insurence"
              aria-label="radio 1"
              type="radio"
              label="Yes"
            />
            <Form.Check
              name="insurence"
              aria-label="radio 1"
              type="radio"
              label="No"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="half imginary" />
    </div>
  );
};

export default Signup;
