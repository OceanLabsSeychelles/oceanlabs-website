import React from 'react'
import {Card, Col, Row, Image} from "react-bootstrap";
import Styles from "../components/Styles";
import logo from "../assets/logo.png"

export default function About() {
    return (
        <Row style={Styles.BootstrapCenter}>
            <Col xs={12} xl={3} style={{...Styles.BootstrapCenter, height: '95vh', padding:"4em"}}>
                <Card className={'bg-light'}>
                    <Card.Body>
                        <Card.Title style={Styles.text}><h3>About</h3>
                            <Image fluid src={logo}/>
                        </Card.Title>
                        <Card.Text>

                            <p style={Styles.text}> (C)opyright 2022<br/>
                                OceanLabs Seychelles LLC<br/>
                                Version 1.0.0<br/>
                                Licensed to: SFA - Aquaculture</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}