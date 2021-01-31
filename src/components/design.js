import React from "react";
import Embed from "./embed";
import { Jumbotron, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Design (){
    const pcb = require("../3dmodels/pcb1.glb");
    const snorkel = require("../3dmodels/snorkel1.glb");
    const models = [{label:"Snorkel", value:snorkel}, {label:"PCB", value:pcb}];

    let jumboStyle = {
        height: "5vh",
        width:"100%"
    };

    let titleStyle = {
        textAlign: "center",
        color: "black",
        paddingBottom:"10px",
        paddingTop:"0px",
    }

    const blogStyle = {
        backgroundColor: "#efe8e7",
    }

    let iframeStyle= {
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        width: "100%",
        height: "91vh",
    }

    const robotSrc = "https://myhub.autodesk360.com/ue2c021aa/shares/public/SH56a43QTfd62c1cd9680b5aadca717ef4b6?mode=embed"
    const content = "A bunch of random text here.A bunch of random text here. A bunch of random text here."
    return(
        <div>
            <Embed
                src={robotSrc}
                content={content}
                weakTitle="Hardware"
                strongTitle="Design"
            ></Embed>
        </div>
    )
    /*
    return(
        <div>
        <Row>
            <Col style={blogStyle} xs={12} md={6}>
                <h1 style={{padding:"20px"}}>Hardware<b>Design</b></h1>
            </Col>
            <Col xs={12} md={6}>
                <ModelViewer models={models}/>
            </Col>
        </Row>
        </div>
    );
    */

}
