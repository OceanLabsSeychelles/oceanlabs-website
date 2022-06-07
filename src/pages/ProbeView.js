import React, {useContext, useEffect, useState} from "react";
import {Badge, Button, ButtonGroup, Card, Col, Row} from "react-bootstrap";
import Styles from "../components/Styles";
import ResponsivePlot from "../components/ResponsivePlot";
import {ProbeContext} from "../context/ProbeProvider";
import {BackendContext} from "../context/SampleDataProvider";

export default function ProbeView(){
    const {ProbeStatus, ProbeColor, ProbeVariant, ProbeDisabled} = useContext(ProbeContext)
    const {Probes} = useContext(BackendContext)
    const [isMobile, setIsMobile] = useState(false);


    function handleWindowSizeChange() {
        if (window.innerWidth < 762) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    useEffect(() => {
        handleWindowSizeChange();
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    function renderPlotRow(props) {
        const color = ProbeColor.state;
        if (!isMobile) {
            return (
                <Row style={Styles.BootstrapCenter}>
                    <Col lg={10} style={{...Styles.BootstrapCenter}}>
                        <ResponsivePlot data={props.data} width={0.5} height={.275} title={props.title}
                                        isMobile={isMobile} color={color}/>
                    </Col>
                    <Col lg={2} style={{...Styles.BootstrapCenter,paddingRight:"3em"}}>
                        <Card className={'bg-light'} style={{padding:'1em'}}>
                            <Card.Body style={{textAlign: 'center'}}>
                                <Card.Title><h2>{props.title}</h2></Card.Title>
                                <Card.Text>
                                    <h4>{props.data[0].y.toFixed(3)}</h4>
                                    <p>{props.units}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )
        } else {
            return (
                <Row style={{...Styles.BootstrapCenter, paddingLeft: '1em', paddingRight: '1em'}}>
                    <Col xs={1} style={{...Styles.BootstrapCenter}}>
                        <p style={{fontSize: '0.8em', paddingTop: '1em', transform: 'rotate(-90deg)'}}>{props.title}</p>
                    </Col>
                    <Col xs={11} style={Styles.BootstrapCenter}>
                        <ResponsivePlot data={props.data} width={0.8} height={.225} title={props.title} color={color}/>
                    </Col>
                </Row>
            )
        }
    }

    function renderDateButtons() {
        return (
            <Row>
                <ButtonGroup style={{alignItems: "center"}}>
                    <Button
                        variant={ProbeVariant.state}
                        onClick={() => {
                            Probes.update()
                        }}
                    >
                        {"<"}
                    </Button>
                    <Button variant={ProbeVariant.state}>Date</Button>
                    <Button
                        variant={ProbeVariant.state}
                        onClick={() => {
                            Probes.update()
                        }}
                    >
                        {">"}
                    </Button>
                </ButtonGroup>
            </Row>
        )
    }

    function renderMobileHeader() {
        if (isMobile === false) {
            return
        }
        return (
            <Col>
                <Row style={{...Styles.BootstrapCenter, padding: 5, width: '103%', backgroundColor:ProbeColor.state}}>
                    Probe Status: {ProbeStatus.state}
                </Row>
                <Row className={'bg-light'} style={{...Styles.BootstrapCenter, padding: 20}}>
                    <Col xs={4} style={Styles.BootstrapCenter}>
                        DO: value
                    </Col>
                    <Col xs={4} style={Styles.BootstrapCenter}>
                        Temp: value
                    </Col>
                    <Col xs={4} style={Styles.BootstrapCenter}>
                        pH: value
                    </Col>
                </Row>
            </Col>
        )
    }

    function renderPage() {

        return (
            <Row className={'bg-white'}>
                <Col xs={12}  xl={9} style={{height: '95vh'}}>
                    {renderMobileHeader()}
                    <div style={{paddingTop: "1em"}}>
                        {renderPlotRow({title: 'Temp', units: "C", data: Probes.temp.data})}
                    </div>
                    {renderPlotRow({title: 'DO', units: "mg/L", data: Probes.do.data})}
                    {renderPlotRow({title: 'pH', units: "", data: Probes.ph.data})}
                    <Col style={Styles.BootstrapCenter} md={(isMobile === true) ? 12 : 10}>
                        {renderDateButtons()}
                    </Col>
                    <Col md={(isMobile === true) ? 0 : 4}>
                    </Col>
                </Col>
                <Col xs={12} xl={3} style={{...Styles.BootstrapCenter,
                    backgroundColor:ProbeColor.state,height:'95vh'}}>
                    <Card style={{textAlign:'center'}}>
                        <Card.Body>
                            <Card.Title style={{padding:'1em'}}>
                                <h3>Probe Name</h3>
                            </Card.Title>
                            <Card.Text>
                                Last Probe Update: <Badge bg={ProbeVariant.state}>{ProbeStatus.state}</Badge><br/><br/>
                                Last Service Date: <Badge bg={'info'}>1/4/22</Badge><br/><br/>
                                Last Calibration Date: <Badge bg={'info'}>10/4/22</Badge>
                            </Card.Text>
                            <Row style={{padding:"0.5em"}}><Button variant={'secondary'}>Calibrate</Button></Row>
                            <Row style={{padding:"0.5em"}}><Button variant={'secondary'}>Set Thresholds</Button></Row>
                            <Row style={{padding:"0.5em"}}><Button variant={'secondary'}>Assign to Tank</Button></Row>

                            <Row style={{padding:"0.5em"}}><Button variant={(ProbeDisabled.state===false)?'secondary':'warning'} onClick={()=>{
                                ProbeDisabled.setState(prevState => !prevState)
                            }}>{(ProbeDisabled.state ===  true)?'Enable Probe':'Disable Probe'}</Button></Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )

    }

    return(renderPage())
}