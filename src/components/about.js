
// Content for the OceanLab's "About" page


import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import BrettsMedia from "./brettsMedia";

const pcb = require("../media/pcb.png");
const turtle = require("../media/turtle.jpg");
const plot = require("../media/pairplot.jpg");
const table = require("../media/table.jpg");
const daniel = require("../media/daniel.png");
const brett = require("../media/brett.jpg");

let designMedia = {
    title: "Design",
    img: pcb,
    text: `We will work with you every step of the way to make sure that your
    project reaches escape velocity. We would love the opportunity to
    immerse ourselves in the challenges and assess the feasibility of all
    possible solutions.`
};

let deployMedia = {
    title: "Deploy",
    img: turtle,
    text: `Correct deployment and support are vital for your venture. We will accompany your
    deployment and will assist you all the way up the end of your
    project's lifecycle.`
};

let analyzeMedia = {
    title: "Analyse",
    img: plot,
    text: `Years of experience with  mathematical analysis, computational
    algorithms, and front-end development will make your experience with
    your data available anywhere, in real-time.`
};

let affectMedia = {
    title: "Affect",
    img: table,
    text: `High quality research can drive real change in government policy, 
    the marine environment, as well as creating the basis for sustainable industries. 
    Let our engineering skills help you lead the charge.`
};



const selfieStyle = {
    padding:"10px",
    width:"100%",
    height:"100%",
    borderRadius:"15px",
    maxWidth:"500px"
}

const About = () => {
    let media = [designMedia, deployMedia, analyzeMedia, affectMedia]
    return (
        <div>
            <Row>
                <BrettsMedia media={media}/>
            </Row>
            <div class="bg-dark text-light">
                <br/>
                <Row>
                    <Col xs={12} md={4}>
                        <img style={selfieStyle} src={daniel} />
                    </Col>
                    <Col xs={12} md={4}>
                        <h1>Made to create</h1>
                        <p>We are a young team of engineers with a passion for the ocean and the natural beauty of the Seychelles.</p>
                        <p>OceanLabs Seychelles can be summarized as our drive to grow the unique engineering culture of Seychelles, aligned to our local environment, while at the same time on par with global standards.</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <img style={selfieStyle} src={brett} />
                    </Col>

                </Row>
            </div>
        </div>
    );
};

export default About;
