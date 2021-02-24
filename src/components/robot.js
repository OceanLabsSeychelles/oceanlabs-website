
// Content for the OceanLab's "Electronic Design" page

import React, { useEffect } from "react";
import {Alert, Card, Col, Jumbotron, Row, Button} from "react-bootstrap";
//import Embed from "./embed";
//import ModelViewer from "./modelViewer";


export default function Robot (){
    //const robotSrc = "https://myhub.autodesk360.com/ue2c021aa/shares/public/SH56a43QTfd62c1cd9680b5aadca717ef4b6?mode=embed"
    const model = require("../3dmodels/bot.glb")
    const poster1 = require("../media/botPoster1.png")
    //const poster2 = require("../media/botPoster2.png")
    //const poster3 = require("../media/botPoster3.png")

    let p1 = `We are familiar with the latest mechanical design and manfacturing techologies -
    and while we are experienced with deploying and operating custom systems literally half-way around the world, 
    we also understand the issues involved with importing and adapting new design paradigms to tropical islands like the Seychelles.`

    const modelStyle = {
        paddingTop: "3rem",
        width: "100%",
        height:"85vh",
    }
    const titleStyle={background:"linear-gradient(\n          90deg,\n          rgba(0, 139, 139, 1) 0%,\n          rgba(188, 209, 255, 1) 100%\n  )",
        paddingTop:"1.5rem",
        paddingBottom:"1rem",
        width:"span",
    };
    const weakTitle="Hardware"
    const strongTitle="Design"
    const subheading="Telepresence Robot"

    /*
       <Embed
           src={robotSrc}
           weakTitle="Hardware"
           strongTitle="Design"
           subheading="Telepresence Robot"
           content={[p1, p2]}
           instructions = "Select the box in the top left corner to view the component tree,
           isolate sub-components, and select views of the model.
           Select the ruler in the lower tool tub to measure the distance between components."
       ></Embed>
   */

    return(
        <Row className="m-auto align-self-center">
            <Col xs={12} sm={3} >
                <br/>
                <Card>
                    <Card.Title>
                        <Jumbotron fluid style={titleStyle} >
                            <h1>
                                {weakTitle} <b>{strongTitle}</b>
                            </h1>
                        </Jumbotron>
                        <h3>{subheading}</h3>
                    </Card.Title>
                    <Card.Body>
                        <p style={{textAlign:"left"}}>
                            {p1}
                        </p>
                        <p style={{textAlign:"left"}}>
                            Here is a robot design completed for <a href="www.slslab.com">SLAB</a>, a Neuroscience & Neurongineering Labratory at California's University at Santa Barbara.
                            The robot worked in conjunction with their dual-photon microscope and is used for imaging living brain cells in laboratory mice as they solve motion problems.
                        </p>
                        <p style={{textAlign:"left"}}>
                            You can view a video of the robots first design iteartion on <a href="https://hackaday.io/project/158770-labratory-telepresence-robot">hackaday.io</a>
                        </p>
                        <Button target='_blank' href="https://a360.co/3ozB9T5" variant="info">Launch Design Review Portal</Button>
                    </Card.Body>
                </Card>
                <br/>
                <Alert variant="warning" >Please allow a minute for the demo to load</Alert>
                <br/>


            </Col>
            <Col xs={12} sm={9}>
                <model-viewer
                    style={modelStyle}
                    src={model}
                    poster={poster1}
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
