import React, { useState, useEffect, useRef } from "react";
import { ReactSVG } from "react-svg";

const PcbLayer = (props) => {
    const [svgContent, setSvgContent] = useState(null);
    const divRef = useRef(null);

    const style = {
        display: "flex",
        opacity: props.opacity || 1,
        zIndex: props.index,
        position: "absolute",
        visibility: props.visible ? "visible" : "hidden",
        color: props.color || "black",
        top: "50%", // These lines are new
        left: "50%",
        transform: `translate(${props.dx || 0}px, ${
            props.dy || 0
        }px) translate(-50%, -50%) scale(${props.scale || 1})`
    };

    useEffect(() => {
        fetch(props.svgFilePath)
            .then((response) => response.text())
            .then((data) => {
                setSvgContent(data);
            });
    }, [props.svgFilePath, props.defaultColor]);

    useEffect(() => {
        if (svgContent && divRef.current) {
            divRef.current.innerHTML = svgContent;
        }
    }, [svgContent]);

    return (
        <ReactSVG
            beforeInjection={(svg) => {
                const polygons = svg.querySelectorAll("polygon");

                polygons.forEach((poly) => {
                    poly.setAttribute("fill", props.color || "black");
                });
            }}
            src={props.svgFilePath}
            style={style}
        />
    );
};

export default PcbLayer;
