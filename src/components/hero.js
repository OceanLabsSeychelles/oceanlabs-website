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
        background: "rgba(2,46,52,0.8)",
        paddingTop:"3rem",
        paddingLeft:"10px",
        paddingRight:"10px",
        paddingBottom:"1rem",
        borderRadius: "25px"
    }

    return(
        <Jumbotron style={imageStyle} fluid>
                <div style={titleStyle}>
                    <h1>{props.title}</h1>
                    <p>{props.subtitle}</p>
                </div>
        </Jumbotron>
    )
}

export default Hero;
