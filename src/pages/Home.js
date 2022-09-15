import React from 'react';
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import banner from "../media/banner2.jpg";
import buoy from "../media/bouyProto1Open.png";
import buoyInternal from "../media/buoyProto2TopInternal.png";

export default function Home() {

    let backgroundImgStyle = {
        color: "navy",
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
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
                        <Card.Img class="img-responsive center-block" src={buoyInternal}/>
                        <Card.Body>
                            <p style={{padding:"1rem"}}>OceanLabs Seychelles deploys leading-edge hardware, software and analysis tools for 
                            researchers and conservation workers in the Indian Ocean.</p>
                            <Link to={'/sandbox'}>
                                <Button style={{width:'100%'}}
                                        className="btn btn-primary"> Sandbox Demonstration</Button>
                            </Link>
                            <br/><br/>
                        </Card.Body>
                    </Card>
                    <br/>
                </Col>
                <Col className="m-auto align-self-center" xs={12} sm={6} md={4} style={titleStyle}>
                    <Card style={{background: "rgba(255,255,255,0.75)",}}>
                        <Card.Title>
                            <h1 style={{paddingTop:"2rem"}}>Engineering<b> Solutions</b></h1>
                        </Card.Title>
                        <Card.Img class="img-responsive center-block"  src={buoy}/>
                        <Card.Body>
                            <p style={{padding:"1rem"}}>We aim for the design and use of appropriate technology, suited to our climate, 
                            infrastructure and the needs of our society and environment.</p>
                            <Link to={'/buoylive'}>
                                <Button style={{width:'100%'}}
                                        className="btn btn-primary"> Buoy Demonstration</Button>
                            </Link>
                            <br/><br/>
                        </Card.Body>
                    </Card>
                    <br/>
                </Col>
            </Row>
        </div>
    );
}