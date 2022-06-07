import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React from "react";
import logo from "../assets/logo1.png"
export default function Header() {

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
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
                    <Nav className="me-auto">
                        <Nav.Link href="about">About</Nav.Link>
                        <NavDropdown title="Static" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/facility">Aquaculture Facility</NavDropdown.Item>
                            <NavDropdown.Item href="/probe">Aquaculture Tank</NavDropdown.Item>
                            <NavDropdown.Item href="/buoystatic">Buoy Deployment</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}