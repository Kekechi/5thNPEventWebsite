import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { Nav as BootNav } from "react-bootstrap";
import newspicksImg from "../../assets/newspicks.png";

function Nav() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={HashLink} to={`/#top`}>
          <img
            alt=""
            src={newspicksImg}
            width="40"
            height="40"
            className="d-inline-block align-center"
            style={{ background: "black" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <BootNav className="me-auto">
            <BootNav.Link as={HashLink} to={`/#top`}>
              Home
            </BootNav.Link>
          </BootNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
