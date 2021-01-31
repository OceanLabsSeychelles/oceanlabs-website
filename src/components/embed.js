import React, { useState } from "react";
import { Jumbotron, Row, Col, Card, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Embed (props){
    const [loaded, setLoaded] = useState("false");
    const [show, setShow] = useState(true);
    let iframeStyle= {
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        width: "100%",
        height: "91vh",
    }

    let titleStyle={background:"linear-gradient(\n          90deg,\n          rgba(0, 139, 139, 1) 0%,\n          rgba(188, 209, 255, 1) 100%\n  )",
        paddingTop:"1.5rem",
        paddingBottom:"1rem",
        width:"span",
    };

    let cardStyle={
        width:"15rem",
        align:"center",
    }
    let contentStyle = {

    }

    let loadHandler = () => {
        setLoaded("true")
    };

    return(
        <Row className="m-auto align-self-center">
        <Col xs={12} md={3} >
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

                    <p style={{textAlign:"left"}}>{props.content}</p>
                    <p style={{textAlign:"left"}}><i>{props.instructions}</i></p>
                </Card.Body>
            </Card>
            <br/>
            <Alert variant="warning" >Please allow a minute for the demo to load</Alert>
            <br/>


        </Col>
            <Col xs={12} md={9}>
                <iframe
                    onLoad={loadHandler}
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
