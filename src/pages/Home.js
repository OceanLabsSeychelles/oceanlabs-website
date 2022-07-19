import React from 'react'
import {Card, Col, Row, Image, Button} from "react-bootstrap";
import Styles from "../components/Styles";
import logo from "../assets/logo1.png";
import {Link} from 'react-router-dom';
import banner from "../assets/banner2.jpg";

export default function Home() {

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
                    <Card style={{background: "rgba(255,255,255,0.75)",}}>
                        <Card.Title>
                            <h1 style={{paddingTop:"2rem"}}>Engineering<b> Solutions</b></h1>
                        </Card.Title>
                        <Card.Img class="img-responsive center-block"  src={logo}/>
                        <Card.Body>
                            <p style={{padding:"1rem"}}>We deploy leading-edge hardware, software and analysis tools for researchers and conservation workers in the Indian Ocean.</p>
                            <Link to={'/buoylive'}>
                                <Button style={{width:'100%'}}
                                        className="btn btn-primary"> Buoy Demonstration</Button>
                            </Link>
                            <br/><br/>
                            <Link to={'/display'}>
                                <Button style={{width:'100%'}}
                                        className="btn btn-primary"> Remote Capture</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    <br/>
                </Col>
            </Row>
        </div>
    );
}