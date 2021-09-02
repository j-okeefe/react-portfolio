import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Footer() {
    return (
      
        <Navbar fixed="bottom" bg="light" variant="light">
          <Container fluid>
            <Navbar.Brand> Made with ❤️ by James O'Keefe &copy; 2021</Navbar.Brand>
            <Nav>
              <Nav.Link href="https://github.com/j-okeefe">Github</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/james-o-keefe-86595739">LinkedIn</Nav.Link>
              <Nav.Link href="mailto:jbo88@att.net">Email Me</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      
    );
  }
  
  export default Footer;