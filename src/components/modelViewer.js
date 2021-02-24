import React from "react";
import { Jumbotron, Row, Col, Card, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ModelViewer (props){
    const modelStyle = {
        paddingTop: "3rem",
        width: "100%",
        height:"91vh",
    }
    const titleStyle={background:"linear-gradient(\n          90deg,\n          rgba(0, 139, 139, 1) 0%,\n          rgba(188, 209, 255, 1) 100%\n  )",
        paddingTop:"1.5rem",
        paddingBottom:"1rem",
        width:"span",
    };

    function renderContent() {
        return props.content.map((item, index) => {
            return(
                <p style={{textAlign:"left"}}>{item}</p>
            );
        });
    }
    let i = 0;

    return(
        <Row className="m-auto align-self-center">
            <Col xs={12} sm={3} >
                <br/>

                <Card>
                    <Card.Title>
                        <Jumbotron fluid style={titleStyle} >
                            <h1>
                                {props.weakTitle} <b>{props.strongTitle}</b>
                            </h1>
                        </Jumbotron>
                        <h3>{props.subheading}</h3>
                    </Card.Title>
                    <Card.Body>
                        {renderContent()}
                        <p style={{textAlign:"left"}}><i>{props.instructions}</i></p>
                    </Card.Body>
                </Card>
                <br/>
                <Alert variant="warning" >Please allow a minute for the demo to load</Alert>
                <br/>


            </Col>
            <Col xs={12} sm={9}>
                <model-viewer
                    style={modelStyle}
                    src={props.src}
                    poster={props.posters[0]}
                    alt="A 3D model of an astronaut"
                    auto-rotate
                    camera-controls
                    exposure="0.4"
                    background-color="#70BCD1"
                ></model-viewer>
            </Col>
        </Row>
    )
}

