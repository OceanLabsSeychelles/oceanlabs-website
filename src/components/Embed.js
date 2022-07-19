import React, { useState } from "react";
import { Row, Col, Card, Button, Alert } from "react-bootstrap";
import Styles from "../components/Styles";


export default function Embed (props){
    const [loaded, setLoaded] = useState("false");
    const [show, setShow] = useState(true);
    let iframeStyle= {

        width: "100%",
        height: "91vh",
    }

    let titleStyle={background:"linear-gradient(\n          90deg,\n          rgba(0, 139, 139, 1) 0%,\n          rgba(188, 209, 255, 1) 100%\n  )",
        paddingTop:"1.5rem",
        paddingLeft:"1rem",
        paddingBottom:"1rem",
        width:"span",
    };

    let loadHandler = () => {
        setLoaded("true")
    };

    function renderContent() {
        return props.content.map((item, index) => {
            return(
                <p style={{textAlign:"left"}}>{item}</p>
            );
        });
    }

    return(
        <Row style={Styles.BootstrapCenter} className="m-auto align-self-center">
            <Col xs={12} sm={3} >
                <br/>

                <Card>
                    <Card.Title>
                        <div fluid style={titleStyle} >
                            <h1>
                                {props.weakTitle} <b>{props.strongTitle}</b>
                            </h1>
                        </div>
                        <h3 style={{paddingLeft:"1rem", paddingTop:"1rem"}}>{props.subheading}</h3>
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
            <Col xs={12} sm={9} style={Styles.BootstrapCenter}>
                <iframe
                    onLoad={loadHandler}
                    src={props.src}
                    style={iframeStyle}

                />
            </Col>
        </Row>
    )
}
