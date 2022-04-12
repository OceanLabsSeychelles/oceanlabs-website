import {Badge, Button, Card, Col, Row} from "react-bootstrap";
import Styles from "../components/Styles";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom"

export default function Facility() {
    const probes = ['Tank 1','Tank 2', 'Tank 3', 'Tank 4','Tank 5', 'Tank 6']
    const [isMobile, setIsMobile] = useState(false);

    function handleWindowSizeChange() {
        if (window.innerWidth < 762) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    useEffect(() => {
        handleWindowSizeChange();
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    function renderProbes() {
        return (
            probes.map(probe => {
                return (
                    <Row className={'bg-light'}
                         style={{...Styles.BootstrapCenter, margin: 20, padding: 10, borderRadius: 10}}>
                        <Col xs={4} sm={3} style={Styles.BootstrapCenter}>
                            <Link to={"/probe"}>
                            <Button variant={'primary'}>{probe}</Button>
                            </Link>
                        </Col>
                        {!isMobile && <Col sm={3} style={Styles.BootstrapCenter}>
                            Probe Name
                        </Col>}
                        <Col xs={8} sm={6} style={Styles.BootstrapCenter}>
                            <Col xs={4} style={Styles.facililitesCol}>
                                DO: {(Math.random()+8.1).toFixed(3)}
                            </Col>
                            <Col xs={4} style={Styles.facililitesCol}>
                                Temp: {(Math.random()+26).toFixed(3)}
                            </Col>
                            <Col xs={4} style={Styles.facililitesCol}>
                                pH: {(Math.random()+7.5).toFixed(3)}
                            </Col>
                        </Col>
                    </Row>
                )
            })
        )
    }

    return (
        <Row className={'bg-white'}>
            <Col xs={12} xl={9} style={{height: '95vh'}}>
                {renderProbes()}
            </Col>
            <Col xs={12} xl={3} style={{...Styles.BootstrapCenter, height: '95vh', backgroundColor: 'rgb(30,44,75)'}}>
                <Card style={{textAlign: 'center'}}>
                    <Card.Body>
                        <Card.Title style={{padding: '1em'}}>
                            <h3>SURF</h3>
                        </Card.Title>
                        <Card.Text>
                            Facility Status: <Badge bg={'success'}>Within Specifications</Badge>
                        </Card.Text>
                        <Row style={{padding: "0.5em"}}><Button variant={'secondary'}>Set Notification Contacts</Button></Row>
                        <Row style={{padding: "0.5em"}}><Button variant={'secondary'}>Send Test
                            Notification</Button></Row>
                        <Row style={{padding: "0.5em"}}><Button variant={'primary'}>Export Data</Button></Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}