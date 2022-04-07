import React, { useState, useEffect } from "react";
import "../node_modules/react-vis/dist/style.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Row,
  Col,
  Navbar,
  Container,
  Button,
  Nav,
  NavDropdown,
  ButtonGroup
} from "react-bootstrap";
import ResponsivePlot from "./components/ResponsivePlot";

export default function App() {
  const [data, setData] = useState(generateData(24));
  function generateData(num) {
    return [...new Array(num)].map((row, index) => ({
      x: index,
      y: Math.random() * 10
    }));
  }

  function renderNav() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <b>SURF</b>Pilot
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  function renderPlot() {
    const modes = ["noWobble", "gentle", "wobbly", "stiff"];
    return (
      <Col>
        <ResponsivePlot data={data} width={0.4} height={0.25} title="Temp" />
        <ResponsivePlot data={data} width={0.4} height={0.25} title="DO" />
        <ResponsivePlot data={data} width={0.4} height={0.25} title="pH" />
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            marginTop: "5px"
          }}
        >
          <ButtonGroup style={{ alignItems: "center", width: "25%" }}>
            <Button
              variant="secondary"
              onClick={() => {
                setData(generateData(24));
              }}
            >
              {"<"}
            </Button>
            <Button variant="secondary">Date</Button>
            <Button
              variant="secondary"
              onClick={() => {
                setData(generateData(24));
              }}
            >
              {">"}
            </Button>
          </ButtonGroup>
        </Row>
      </Col>
    );
  }

  return (
    <div>
      {renderNav()}
      <div>{renderPlot()}</div>
    </div>
  );
}
