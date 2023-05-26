import React from 'react';
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import banner from "../media/banner2.jpg";
import buoy from "../media/bouyProto1Open.png";
import buoyInternal from "../media/buoyProto2TopInternal.png";
import cousinMap from "../media/cousinMap.png";

export default function Home() {

    let backgroundImgStyle = {
        color: "navy",
        backgroundColor: "navy",
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        padding: "0",
        backgroundClip: "border-box",
        minHeight: "100vh",
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
                            <p style={{padding:"1rem"}}>OceanLabs Seychelles' engineering projects see the design and implementation of bespoke devices 
                            for environmental monitoring and process control.</p>
                            <Link to={'/about'}>
                                <Button style={{width:'100%'}}
                                        className="btn btn-primary"> Learn more about OceanLabs Seychelles</Button>
                            </Link>
                            <br/><br/>
                        </Card.Body>
                    </Card>
                    <br/>
                </Col>
                <Col className="m-auto align-self-center" xs={12} sm={6} md={4} style={titleStyle}>
                    <Card style={{background: "rgba(255,255,255,0.75)",}}>
                        <Card.Title>
                            <h1 style={{paddingTop:"2rem"}}>Tech in<b> Conservation</b></h1>
                        </Card.Title>
                        <Card.Body>
                        <iframe width="3424" height="1120" src="https://www.youtube.com/embed/6LG0MUOXmeU" title="OceanLabs Remote Sensing Buoy 1080p" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Card.Body>
                        <Card.Img class="img-responsive center-block"  src={buoy}/>
                        <Card.Body>
                            <p style={{padding:"1rem"}}>We are able to design and deploy leading-edge hardware, software and analysis tools for 
                            researchers and conservation workers in the Indian Ocean.</p>
                            <Link to={'/facility'}>
                                <Button style={{width:'100%'}}
                                        className="btn btn-primary"> Visit our aquaculture monitoring demo</Button>
                            </Link>
                            <br/><br/>
                        </Card.Body>
                    </Card>
                    <br/>
                </Col>
                <Col className="m-auto align-self-center" xs={12} sm={6} md={4} style={titleStyle}>
                    <Card style={{background: "rgba(255,255,255,0.75)",}}>
                        <Card.Title>
                            <h1 style={{paddingTop:"2rem"}}>Remote<b> Sensing</b></h1>
                        </Card.Title>
                        <Card.Img class="img-responsive center-block"  src={cousinMap}/>
                        <Card.Body>
                            <p style={{padding:"1rem"}}>Our devices can collect data in even the most remote ocean and island locations, 
                            safely transmitting that data to where your team needs it.
                            </p>
                            <Link to={'/buoylive'}>
                                <Button style={{width:'100%'}}
                                        className="btn btn-primary"> Explore our remote sensing buoy demo</Button>
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