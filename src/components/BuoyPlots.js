import React, {useContext, useEffect} from "react";
import ResponsivePlot from "../components/ResponsivePlot";
import {BackendContext} from "../context/SampleDataProvider";
import Styles from "./Styles";
import {Col, Row, Card, Button, ButtonGroup} from "react-bootstrap";
import {chakra} from "@chakra-ui/react";

export default function BuoyPlots(props) {
    const {Probes} = useContext(BackendContext);

    function renderDateButtons() {
        return (
            <Row style={Styles.BootstrapCenter}>
                <ButtonGroup
                    style={{alignItems: "center", width: "50%", padding: "1em"}}
                >
                    <Button
                        variant={"light"}
                        onClick={() => {
                            Probes.update();
                        }}
                    >
                        {"<"}
                    </Button>
                    <Button variant={"light"}>Date</Button>
                    <Button
                        variant={"light"}
                        onClick={() => {
                            Probes.update();
                        }}
                    >
                        {">"}
                    </Button>
                </ButtonGroup>
            </Row>
        );
    }

    function renderPlotRow(vars) {
        if(!props.isMobile){
            return(
                <Row style={Styles.BootstrapCenter}>
                    <Col
                        lg={2}
                        style={{transform: "rotate(-90deg)", fontSize: "0.75em"}}
                    >
                        <chakra.p color={'black'}>{vars.title}</chakra.p>
                    </Col>
                    <Col lg={10}>
                        <ResponsivePlot
                            data={Probes.do.data}
                            width={0.2}
                            height={0.15}
                            title={vars.title}
                            isMobile={props.isMobile}
                        />
                    </Col>
                </Row>
            )
        }else {
            return (
                <Row style={{...Styles.BootstrapCenter, paddingLeft: '1em', paddingRight: '1em'}}>
                    <Col xs={1} style={{...Styles.BootstrapCenter}}>
                        <p style={{fontSize: '0.8em', paddingTop: '1em', transform: 'rotate(-90deg)'}}>{vars.title}</p>
                    </Col>
                    <Col xs={11} style={Styles.BootstrapCenter}>
                        <ResponsivePlot data={vars.data} width={0.6} height={.125} title={vars.title}/>
                    </Col>
                </Row>
            )
        }

    }

    return (
        <Card style={{textAlign: "center", width: "90%"}}>
            <Card.Body>
                <Card.Title style={{padding: "1em"}}>
                    <chakra.h5 color={'black'}>{Probes.buoy}</chakra.h5>
                </Card.Title>
                <Card.Text>
                    {renderPlotRow({title:"DO", data:Probes.do.data})}
                    {renderPlotRow({title:"pH", data:Probes.ph.data})}
                    {renderPlotRow({title:"Temp", data:Probes.temp.data})}
                    {renderPlotRow({title:"Wave Height", data:Probes.wh.data})}
                    {renderDateButtons()}
                    <Row>
                        <Col><Button style={{margin: "0.5em", width: "75%"}}>Export</Button></Col>
                        <Col> <Button
                            style={{margin: "0.5em", width: "75%"}}
                            variant={"outline-dark"}
                            onClick={() => {
                                Probes.setVisible(false);
                            }}
                        >
                            Return
                        </Button></Col>


                    </Row>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
