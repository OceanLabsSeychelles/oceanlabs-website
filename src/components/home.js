import React from "react";
import { Jumbotron, Image, Row, Col, Card, Media } from "react-bootstrap";
import BrettsMedia from "./brettsMedia";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../media/logo.png";
import brett from "../media/brett.jpg";
import daniel from "../media/daniel.png";
import pcb from "../media/pcb.png";
import turtle from "../media/turtle.jpg";
import plot from "../media/pairplot.png";
import table from "../media/table.jpg";

const Home = () => {
  let designMedia = {
    title: "Design",
    img: pcb,
    text: `We will work with you every step of the way to make sure that your
    project reaches escape velocity. We would love the opportunity to
    immerse ourselves in the issues and assess the feasibility of all
    possible solutions.`
  };

  let deployMedia = {
    title: "Deploy",
    img: turtle,
    text: `Correct deployment is vital for your venture. We can accompany your
    deployment all the way and will assist you to the end of the
    projects lifecycle.`
  };

  let analyzeMedia = {
    title: "Analyze",
    img: plot,
    text: `Years of experience with the mathematical analyses, computational
    techniques, and front-end development makes your experience with
    your data available available anywhere in real-time.`
  };

  let affectMedia = {
    title: "Affect",
    img: table,
    text: `Years of experience with the mathematical analyses, computational
    techniques, and front-end development makes your experience with
    your data available available anywhere in real-time.`
  };

  return (
    <div>
      <Row>
        <Jumbotron xs={12} fluid>
          <div>
            <h1>Engineered Research Solutions</h1>
            <p>
              A client-driven firm deploying bleeding-edge hardware, software,
              and analysis tools for researchers and conservation workers in the
              Indian Ocean.
            </p>
            <Image src={logo} fluid />
          </div>
        </Jumbotron>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <Image class="photo" src={brett} xs={12} sm={4} rounded fluid />
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>
                <b>Trust</b> & Experience
              </Card.Title>
              <Card.Text>
                We are accustomed to working in fast-paced environments where
                interpersonal reliability is just as important as technical
                skill. Sustainable outcomes and client growth drive our entire
                workflow: from contract structure to deliverables, your needs
                come first.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Image class="photo" src={daniel} xs={12} sm={4} rounded fluid />
        </Col>
      </Row>
      <BrettsMedia
        media={[designMedia, deployMedia, analyzeMedia, affectMedia]}
      ></BrettsMedia>
    </div>
  );
};

export default Home;
