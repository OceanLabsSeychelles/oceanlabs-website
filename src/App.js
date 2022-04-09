import React, {useState, useEffect} from "react";
import "../node_modules/react-vis/dist/style.css";
import "bootstrap/dist/css/bootstrap.css";
import {
    Row,
    Col,
    Button,
    ButtonGroup,
    Card,
    Badge
} from "react-bootstrap";
import DateInput from "react-dates"
import ResponsivePlot from "./components/ResponsivePlot";
import Header from "./components/Header";
import Styles from "./components/Styles"
import "./styles.css"

export default function App() {
    const [data, setData] = useState(generateData(24));
    const [isMobile, setIsMobile] = useState(false);

    function handleWindowSizeChange() {
        if (window.innerWidth < 762) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
        console.log(isMobile);
    }

    useEffect(() => {
        setData(generateData(24))
        handleWindowSizeChange();
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    function generateData(num) {
        return [...new Array(num)].map((row, index) => ({
            x: index,
            y: Math.random() * 3 + 5
        }));
    }

    function renderPlotRow(props) {
        if (!isMobile) {
            return (
                <Row style={Styles.BootstrapCenter}>
                    <Col lg={10} style={{...Styles.BootstrapCenter}}>
                        <ResponsivePlot data={props.data} width={0.5} height={.275} title={props.title}
                                        isMobile={isMobile}/>
                    </Col>
                    <Col lg={2} style={{...Styles.BootstrapCenter,paddingRight:"3em"}}>
                        <Card className={'bg-light'} style={{padding:'1em'}}>
                            <Card.Body style={{textAlign: 'center'}}>
                                <Card.Title><h2>{props.title}</h2></Card.Title>
                                <Card.Text>
                                    <h4>{data[0].y.toFixed(3)}</h4>
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
                        <ResponsivePlot data={props.data} width={0.8} height={.225} title={props.title}/>
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
                        variant="primary"
                        onClick={() => {
                            setData(generateData(24));
                        }}
                    >
                        {"<"}
                    </Button>
                    <Button variant="primary">Date</Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            setData(generateData(24));
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
                <Row className={'bg-success'} style={{...Styles.BootstrapCenter, padding: 5, width: '103%'}}>
                    Probe Connected
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
                        {renderPlotRow({title: 'Temp', units: "C", data: data})}
                    </div>
                    {renderPlotRow({title: 'DO', units: "mg/L", data: data})}
                    {renderPlotRow({title: 'pH', units: "", data: data})}
                    <Col style={Styles.BootstrapCenter} md={(isMobile === true) ? 12 : 10}>
                        {renderDateButtons()}
                    </Col>
                    <Col md={(isMobile === true) ? 0 : 4}>
                    </Col>
                </Col>
                <Col xs={12} xl={3} style={{...Styles.BootstrapCenter,backgroundColor:'#44475a',height:'100vh'}}>
                    <Card style={{textAlign:'center'}}>
                        <Card.Body>
                            <Card.Title style={{padding:'1em'}}>
                                <h3>Probe Name</h3>
                            </Card.Title>
                            <Card.Text>
                                Last Probe Update: <Badge bg={'success'}>4 minutes ago</Badge><br/><br/>
                                Last Service Date: <Badge bg={'warning'}>10/4/22</Badge>
                            </Card.Text>
                            <Row style={{padding:"0.5em"}}><Button variant={'outline-primary'}>Calibrate</Button></Row>
                            <Row style={{padding:"0.5em"}}><Button variant={'outline-primary'}>Set Thresholds</Button></Row>
                            <Row style={{padding:"0.5em"}}><Button variant={'outline-primary'}>Disable Probe</Button></Row>
                            <Row style={{padding:"0.5em"}}><Button variant={'primary'}>Export</Button></Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )

    }

    return (
        <div>
            <Header/>
            <div>{renderPage()}</div>
        </div>
    );
}