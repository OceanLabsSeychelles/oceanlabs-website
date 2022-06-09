import React from 'react'
import {Card, Col, Row, Image, Button} from "react-bootstrap";
import Styles from "../components/Styles";
import logo from "../assets/logo1.png";
import {Link} from 'react-router-dom';
import banner from "../assets/banner2.jpg";

export default function About() {

    let backgroundImgStyle = {
        color: "white",
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        padding: "0",
    };

    return (
        <div style={backgroundImgStyle}>
        <Row style={Styles.BootstrapCenter}>
            <Col xs={12} xl={3} style={{...Styles.BootstrapCenter, height: '95vh', padding:"4em"}}>
                <Card style={{background: "rgba(0,0,0,0.5)",}}  xs={12} sm={8} md={4}>
                    <Card.Body>
                        <Card.Title style={Styles.text}><h3>About</h3>
                            <Image fluid src={logo}/>
                        </Card.Title>
                        <Card.Text>
                            <p style={Styles.text}>
                                (C)opyright 2022<br/>
                                OceanLabs Seychelles LLC<br/>
                                Version 1.0.3<br/>
                                Licensed to: Nature Seychelles
                            </p>
                        </Card.Text>
                        <Link to={'/buoylive'}>
                        <Button style={{width:'100%'}}
                                className="btn btn-primary"> Buoy Demonstration</Button>
                        </Link>
                            <br/><br/>
                        <Link to={'/display'}>
                            <Button style={{width:'100%'}}
                                    className="btn btn-primary"> Remote Capture</Button>
                        </Link>
                        <br/><br/>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </div>
    )
}