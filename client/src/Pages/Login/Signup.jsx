import React from "react";
import "./Signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Signup = () => {
  return (
    <Form className="">
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <DropdownButton variant="outline-secondary" title="Gender">
          <Dropdown.Item href="#">Male</Dropdown.Item>
          <Dropdown.Item href="#">Female</Dropdown.Item>
          <Dropdown.Item href="#">Others</Dropdown.Item>
        </DropdownButton>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="text" placeholder="Mobile Number" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Aadhar Number</Form.Label>
        <Form.Control type="text" placeholder="Aadhar Number" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="re-enter Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Signup;
