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
                        <NavDropdown title="Capabilities" id="basic-nav-dropdown" style={{textAlign:'center'}}>
                            <NavDropdown.Item href="/pcb">Electronic Design</NavDropdown.Item>
                            <NavDropdown.Item href="/robot">Mechanical Design</NavDropdown.Item>
                            <NavDropdown.Item href="/sandbox">Software Design</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Static Demo" id="basic-nav-dropdown" style={{textAlign:'center'}}>
                            <NavDropdown.Item href="/facility">Aquaculture Facility</NavDropdown.Item>
                            <NavDropdown.Item href="/probe">Aquaculture Tank</NavDropdown.Item>
                            <NavDropdown.Item href="/buoystatic">Buoy Deployment</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Live Demo" id="basic-nav-dropdown" style={{textAlign:'center'}}>
                            <NavDropdown.Item href="">Aquaculture</NavDropdown.Item>
                            <NavDropdown.Item href="/buoylive">Buoy</NavDropdown.Item>
                            <NavDropdown.Item href="/display">Remote Capture</NavDropdown.Item>
                            <NavDropdown.Item href="/data">Raw Data</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link style={{textAlign:'center'}} href="/about">About</Nav.Link>
                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}