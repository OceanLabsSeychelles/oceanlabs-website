import React from "react";
import { Jumbotron, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Fusion (props){

    let iframeStyle= {
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        width: "100%",
        height: "91vh",
    }

    let titleStyle={"background":"linear-gradient(\n          90deg,\n          rgba(0, 139, 139, 1) 0%,\n          rgba(188, 209, 255, 1) 100%\n  )",
        "paddingTop":"1.5rem",
        "paddingBottom":"1rem",
        "width":"100%"};

    let contentStyle={
        height:"45vh",
    }
    return(
        <Row className="m-auto align-self-center">
        <Col xs={12} md={3} >
            <br/>
            <Card>
                <Jumbotron style={titleStyle} fluid>
                    <h1>
                        {props.weakTitle}<b>{props.strongTitle}</b>
                    </h1>
                </Jumbotron>
                <Card.Body>
                    <h3>{props.subheading}</h3>
                    <br />
                    <Card.Text style={contentStyle}>
                        {props.content}
                    </Card.Text>
                    <Button variant="primary">Read Blog</Button>
                </Card.Body>
            </Card>
        </Col>
            <Col xs={12} md={9}>
                <iframe
                    src={props.src}
                    style={iframeStyle}
                    allowfullscreen="true"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    frameborder="0"
                />
            </Col>
        </Row>
    )
}
