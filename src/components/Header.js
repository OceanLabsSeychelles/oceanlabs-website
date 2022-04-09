import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React from "react";

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <b>SURF</b>Pilot
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Facility</Nav.Link>
                        <NavDropdown title="Probes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.2">
                                Probe Name
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Notifications" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.2">
                                Send Test Notification
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Set Notification Contacts
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}