// Content for the OceanLab's "About" page

import React from "react";
import {Row, Col, Card, Button} from "react-bootstrap";
import Styles from "../components/Styles";
import BrettsMedia from "../components/BrettsMedia";
import pcb from "../media/pcb.png";
import turtle from "../media/turtle.jpg";
import plot from "../media/pairplot.jpg";
import table from "../media/table.jpg";
import daniel from "../media/daniel.png";
import brett from "../media/brett.jpg";

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
    text: `We understand correct deployment and support are vital for your venture. We will accompany your
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
    Let our engineering skills help you lead the charge.`
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
            <Row style={Styles.BootstrapCenter}>
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
                        <p>OceanLabs Seychelles can be summarized as our drive to grow the
                        unique engineering culture of Seychelles, aligned to our
                            environment while at the same time on par with global standards.</p>
                        <p>Our engineering skills are focused on marine and environmental
                        remote sensing projects, as well as Internet of Things projects,
                        for Seychelles’ agricultural sectors, industries, organisations and
                        governmental units.</p>
                            <p> We aim for the design and use of appropriate technology, suited
                        to our climate, infrastructure and the needs of our society and
                        environment</p>
                        <h4>Contact us at <b>oceanlabs.seychelles@gmail.com</b></h4>
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
