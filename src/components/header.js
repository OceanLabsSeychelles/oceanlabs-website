import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
    const logo = require("../media/logo1.png");
    let navbarStyle = {
        width: "100%",
        whiteSpace: "nowrap",
        height: "7vh",
        marginBottom: "0px",
    };

  return (
      <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="/">
          <img
              alt=""
              src={logo}
              width="65"
              height="50"
          />
         Ocean<b>Labs</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

            <NavDropdown title={
                <span className="mr-auto">Capabilities</span>
            } >
                <NavLink to="/robot" >
                    Hardware Design
                </NavLink><br/>
                <NavLink to="/pcb">
                    Electronic Design
                </NavLink><br/>
                <NavLink to="/sandbox">
                    Software Design
                </NavLink>
            </NavDropdown>

            <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
            </LinkContainer>

        </Nav>
      </Navbar.Collapse>
    </Navbar>



  );
};

export default Header;
