import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Framer3D from "../components/ModelViewer/Framer3D";
import FadeIn from "../components/FadeIn";
import ProjectLog from "../components/ProjectLog";
import 'typeface-lato';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import {selectModel, setModel} from "../reducers/modelReducer";
import {useSelector} from "react-redux";

export default function ProjectPage(props){
    const [isXlScreen, setIsXlScreen] = useState(false);
    const model = useSelector(selectModel);

    useEffect(() => {
        const handleResize = () => {
            setIsXlScreen(window.matchMedia("(min-width: 1200px)").matches);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Container style={{width:'100wh'}}>
            {isXlScreen ? (
                <Row className="project" style={{width:'100%'}}>
                    <Col sm={8}>
                        <FadeIn>
                            <div
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingTop: "3rem",
                                    paddingBottom: "3rem",
                                    paddingLeft: "0rem",
                                    height:'90vh',
                                    width:'100%',
                                    overflow:'hidden',
                                    overflowY:'scroll',
                                    WebkitScrollbar: {
                                        display: "none"
                                    },
                                    scrollbarWidth:'0',
                                    scrollbarColor:'transparent transparent',
                                }}
                            >
                                {props?.children}

                                {props.projectLogs.map((log) => (
                                    <ProjectLog
                                        key={log.title}
                                        expandedColor = {"rgb(242,255,255)"}
                                        collapsedColor = {props.collapsedColor}
                                        {...log}
                                    />
                                ))}
                            </div>

                        </FadeIn>
                    </Col>

                    <Col sm={4}>
                        <FadeIn duration={2}>
                            <Framer3D
                                background={props.modelBackground}
                                model={model}
                                title={"Dive Buddy"}
                                subtitle={"A partner-paired dive computer"}
                                modelHeight={"60vh"}
                                framerHeight={"20vh"}
                            />
                        </FadeIn>
                    </Col>
                </Row>
            ) : (
                <Row>
                    <Col sm={12} xl={6}>
                        <FadeIn duration={2}>
                            {props?.children}
                            <Framer3D
                                background={props.modelBackground}
                                model={model}
                                title={"Dive Buddy"}
                                subtitle={"A partner-paired dive computer"}
                                modelHeight={"60vh"}
                                framerHeight={"20vh"}
                            />
                        </FadeIn>
                    </Col>
                    <Col sm={12} xl={6}>
                        <FadeIn>
                            <div
                                style={{
                                    marginTop: "68vh",
                                    marginBottom: "5rem",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingTop: "3rem",
                                    paddingLeft: "0rem",
                                }}
                            >
                                {props.projectLogs.map((log) => (
                                    <ProjectLog
                                        key={log.title}
                                        expandedColor = {"rgb(242,255,255)"}
                                        collapsedColor = {props.collapsedColor}
                                        {...log}
                                    />
                                ))}
                            </div>
                        </FadeIn>
                    </Col>
                </Row>
            )}
        </Container>
    );
};