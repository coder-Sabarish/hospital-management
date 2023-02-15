import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./navbar.css";

const navbar = () => {
  const menuData = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/",
      name: "Contact",
    },
    {
      path: "/",
      name: "Service",
    },
  ];
  return (
    <>
      <Navbar bg="navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="brand">
            KEC Hospital
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {menuData.map((item) => (
                <Nav.Link to={item.path} key={item.name}>
                  <div className="list_item">{item.name}</div>
                </Nav.Link>
              ))}
            </Nav>
            <Nav className="ms-auto">
              <button className="btn btn-success">Sign Up</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default navbar;
