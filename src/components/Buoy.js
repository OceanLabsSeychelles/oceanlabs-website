import React, { useContext, useEffect } from "react";
import ResponsivePlot from "../components/ResponsivePlot";
import { BackendContext } from "../context/BackendProvider";
import Styles from "./Styles";
import { Col, Row, Card, Button, ButtonGroup } from "react-bootstrap";

export default function Buoy(props) {
  const { Probes } = useContext(BackendContext);

  function renderDateButtons() {
    return (
      <Row style={Styles.BootstrapCenter}>
        <ButtonGroup
          style={{ alignItems: "center", width: "50%", padding: "1em" }}
        >
          <Button
            variant={"light"}
            onClick={() => {
              Probes.update();
            }}
          >
            {"<"}
          </Button>
          <Button variant={"light"}>Date</Button>
          <Button
            variant={"light"}
            onClick={() => {
              Probes.update();
            }}
          >
            {">"}
          </Button>
        </ButtonGroup>
      </Row>
    );
  }

  return (
    <Card style={{ textAlign: "center", width: "90%" }}>
      <Card.Body>
        <Card.Title style={{ padding: "1em" }}>
          <h5>{Probes.buoy}</h5>
        </Card.Title>
        <Card.Text>
          <Row style={Styles.BootstrapCenter}>
            <Col
              lg={2}
              style={{ transform: "rotate(-90deg)", fontSize: "0.75em" }}
            >
              DO (mg/L)
            </Col>
            <Col lg={10}>
              <ResponsivePlot
                data={Probes.do.data}
                width={0.225}
                height={0.15}
                title={"DO"}
                isMobile={false}
              />
            </Col>
          </Row>
          <Row style={Styles.BootstrapCenter}>
            <Col
              lg={2}
              style={{ transform: "rotate(-90deg)", fontSize: "0.75em" }}
            >
              pH
            </Col>
            <Col lg={10}>
              <ResponsivePlot
                data={Probes.ph.data}
                width={0.225}
                height={0.15}
                title={"pH"}
                isMobile={false}
              />
            </Col>
          </Row>
          <Row style={Styles.BootstrapCenter}>
            <Col
              lg={2}
              style={{
                transform: "rotate(-90deg)",
                fontSize: "0.75em"
              }}
            >
              Temp (c)
            </Col>
            <Col lg={10}>
              <ResponsivePlot
                data={Probes.temp.data}
                width={0.225}
                height={0.15}
                title={"Temp"}
                isMobile={false}
              />
            </Col>
          </Row>
          <Row style={Styles.BootstrapCenter}>
            <Col
              lg={2}
              style={{
                transform: "rotate(-90deg)",
                fontSize: "0.75em"
              }}
            >
              Wave Height (m)
            </Col>
            <Col lg={10}>
              <ResponsivePlot
                data={Probes.wh.data}
                width={0.225}
                height={0.15}
                title={"wh"}
                isMobile={false}
              />
            </Col>
          </Row>
          {renderDateButtons()}
          <Row >
              <Col><Button style={{ margin: "0.5em", width: "50%" }}>Export</Button></Col>
              <Col> <Button
                  style={{ margin: "0.5em", width: "50%" }}
                  variant={"outline-dark"}
                  onClick={() => {
                      Probes.setVisible(false);
                  }}
              >
                  Return
              </Button></Col>


          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
