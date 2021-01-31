import React from "react";
import {Jumbotron, Col, Row, Card} from "react-bootstrap";
import BrettsCarousel from "./brettCarousel";
import 'bootstrap-css-only/css/bootstrap.min.css';
import '../styles.css'
const Home = () => {
  const logo = require("../media/logo1.png");
  const banner = require("../media/banner2.jpg");

  let backgroundImgStyle = {
    color: "white",
    backgroundImage: `url(${banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    padding: "0",
  };

  let titleStyle = {
    textAlign: "center",
    align: "center",
    color: "black",
    background: "rgba(0,0,0,0.0)",
    paddingBottom: "1rem",
    paddingRight: "2rem",
    paddingLeft: "2rem",
    paddingTop: "2rem",
    borderRadius: "25px",
  }

  return (
    <div style={backgroundImgStyle}>
      <Row className="m-auto align-self-center">
        <Col className="m-auto align-self-center" xs={12} sm={6} md={4} style={titleStyle}>
          <Card style={{background: "rgba(255,255,255,0.55)",}}>
            <Card.Title>
              <h1 style={{paddingTop:"2rem"}}>Engineering<b> Solutions</b></h1>
            </Card.Title>
            <Card.Img class="img-responsive center-block"  src={logo}/>
            <Card.Body>
              <p style={{padding:"1rem"}}>We deploy leading-edge hardware, software, and analysis tools for researchers and conservation workers in the Indian Ocean.</p>
            </Card.Body>
          </Card>
          <br/>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
