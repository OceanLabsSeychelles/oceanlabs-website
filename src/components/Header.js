import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React from "react";

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <b>SURF</b>Pilot
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Facility</Nav.Link>
                        <NavDropdown title="Probes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/probe">
                                Probe Name
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}