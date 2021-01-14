import React from "react";
import { Jumbotron, Col } from "react-bootstrap";
const Hero = (props) => {

    let imageStyle = {
        color: "white",
        backgroundImage: `url(${props.img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
    };

    let titleStyle = {
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        background: "rgba(0,0,0,0.6)",
        paddingTop:"3rem",
        paddingLeft:"10px",
        paddingRight:"10px",
        paddingBottom:"1rem",
        borderRadius: "25px"
    }

    return(
        <Jumbotron style={imageStyle} fluid>
                <div style={titleStyle}>
                    <h1>{props.titleWeak}<b>{props.titleStrong}</b></h1>
                    <h5>{props.subtitle}</h5>
                </div>
        </Jumbotron>
    )
}

export default Hero;
