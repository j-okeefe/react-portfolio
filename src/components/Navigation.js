import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Navigation({ handlePageChange }) {
    return (
      <Navbar collapseOnSelect expand="lg" fixed="top" bg="secondary" variant="dark">
        <Container fluid>
          <Navbar.Brand>My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Link href="#" onClick={() => handlePageChange("AboutMe")}>
              Home
            </Nav.Link>
            <Nav.Link href="#" onClick={() => handlePageChange("Project")}>
              Projects
            </Nav.Link>
            <Nav.Link href="#" onClick={() => handlePageChange("Resume")}>
              Resume
            </Nav.Link>
            <Nav.Link href="#" onClick={() => handlePageChange("Contact")}>
              Contact Me
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Navigation;