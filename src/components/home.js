import React from "react";
import { Image, Row, Col, Card } from "react-bootstrap";
import BrettsMedia from "./brettsMedia";
import Hero from "./hero";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {

  const brett = require("../media/brett.jpg");
  const daniel = require("../media/daniel.png");
  const pcb = require("../media/pcb.png");
  const turtle = require("../media/turtle.jpg");
  const plot = require("../media/pairplot.jpg");
  const table = require("../media/table.jpg");
  const banner = require("../media/banner0.jpg");

  let designMedia = {
    title: "Design",
    img: pcb,
    text: `We will work with you every step of the way to make sure that your
    project reaches escape velocity. We would love the opportunity to
    immerse ourselves in the issues and assess the feasibility of all
    possible solutions.`
  };

  let deployMedia = {
    title: "Deploy",
    img: turtle,
    text: `Correct deployment is vital for your venture. We can accompany your
    deployment all the way and will assist you to the end of the
    projects lifecycle.`
  };

  let analyzeMedia = {
    title: "Analyze",
    img: plot,
    text: `Years of experience with the mathematical analyses, computational
    techniques, and front-end development makes your experience with
    your data available available anywhere in real-time.`
  };

  let affectMedia = {
    title: "Affect",
    img: table,
    text: `High quality research drives real change in government policy, 
    the marine environment, and sustainable industry. Let our engineering 
    help you lead the charge.`
  };

  return (
    <div>
      <Hero img={banner} titleWeak={"Engineering"} titleStrong={"Solutions:"}
            subtitle={`We are a client-driven firm deploying leading-edge hardware, software, and analysis tools for researchers and conservation workers in the
                    Indian Ocean.`}/>
    </div>
  );
};

export default Home;
