import React from "react";
import 'bootstrap-css-only/css/bootstrap.min.css';
import {Jumbotron, Col, Row, Button} from "react-bootstrap";


const Home = () => {

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
        <Jumbotron fluid style={titleStyle}>
          <h1 style={{padding:"20px"}}>Engineering<b>Solutions</b></h1>
          <p>We deploy leading-edge hardware, software, and analysis tools for researchers and conservation workers in the Indian Ocean.</p>
          <br/>
          <Button variant="outline-warning" size="lg" block >Learn How</Button>
        </Jumbotron>
      </Row>
    </div>
  );
};

export default Home;
