import React from "react";
import {Jumbotron, Col, Row, Card} from "react-bootstrap";
import BrettsCarousel from "./brettCarousel";
import 'bootstrap-css-only/css/bootstrap.min.css';
import '../styles.css'
const Home = () => {

  const pcb = require("../media/pcb.png");
  const turtle = require("../media/turtle.jpg");
  const plot = require("../media/pairplot.jpg");
  const table = require("../media/table.jpg");

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
    text: `High quality research drives real change in government policy, 
    the marine environment, and sustainable industry. Let our engineering 
    help you lead the charge.`
  };

  let mediaObject = [designMedia, deployMedia, analyzeMedia, affectMedia]

  const banner = require("../media/banner2.jpg");

  let imageStyle = {
    color: "white",
    backgroundImage: `url(${banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "92vh",
    padding: "0",
  };

  let titleStyle = {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    background: "rgba(0,0,0,0.7)",
    paddingBottom: "1rem",
    paddingRight: "2rem",
    paddingLeft: "2rem",
    paddingTop: "2rem",
    borderRadius: "25px",
  }

  return (
    <div>
      <Row style={imageStyle}>
        <Col xs={12}>
        <Jumbotron fluid style={titleStyle}>
          <h1 style={{padding:"1rem"}}>Engineering<b>Solutions</b></h1>
          <p style={{padding:"1rem"}}>We deploy leading-edge hardware, software, and analysis tools for researchers and conservation workers in the Indian Ocean.</p>
          <br/>
        </Jumbotron>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
