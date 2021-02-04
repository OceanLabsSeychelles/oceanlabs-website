import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from "react";
import BrettsMedia from "./brettsMedia";


const pcb = require("../media/pcb.png");
const turtle = require("../media/turtle.jpg");
const plot = require("../media/pairplot.jpg");
const table = require("../media/table.jpg");

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
    text: `Correct deployment is vital for your venture. We can accompany your
    deployment all the way and will assist you all the way up the end of your
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


const About = () => {
    let media = [designMedia, deployMedia, analyzeMedia, affectMedia]
    return (
        <div>
            <BrettsMedia media={media}/>
        </div>
    );
};

export default About;
