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
import ResponsivePlot from "./components/ResponsivePlot";
import Header from "./components/Header";
import Styles from "./components/Styles"

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
            y: Math.random() * 10
        }));
    }

    function renderPlotRow(props) {
        if (!isMobile) {
            return (
                <Row style={Styles.BootstrapCenter}>
                    <Col lg={8} style={Styles.BootstrapCenter}>
                        <ResponsivePlot data={props.data} width={0.4} height={.25} title={props.title}
                                        isMobile={isMobile}/>
                    </Col>
                    <Col lg={4} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>{props.title} Thresholds</Card.Title>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                <Col>
                                    <Button variant="warning">Unlock</Button>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            )
        } else {
            return (
                <Row style={Styles.BootstrapCenter}>
                    <ResponsivePlot data={props.data} width={0.8} height={.2} title={props.title}/>
                </Row>
            )
        }
    }

    function renderDateButtons() {
        return (
            <Row>
                <ButtonGroup style={{alignItems: "center"}}>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            setData(generateData(24));
                        }}
                    >
                        {"<"}
                    </Button>
                    <Button variant="secondary">Date</Button>
                    <Button
                        variant="secondary"
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
                <Row className={'bg-success'} style={{...Styles.BootstrapCenter, padding: 5}}>
                    Probe Connected
                </Row>
                <Row className={'bg-light'} style={{...Styles.BootstrapCenter, padding: 10}}>
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
            <Row>
                {renderMobileHeader()}
                <Col xs={12} lg={8}>
                    {renderPlotRow({title: 'Temp', data: data})}
                    {renderPlotRow({title: 'DO', data: data})}
                    {renderPlotRow({title: 'pH', data: data})}
                    <Col style={Styles.BootstrapCenter} md={(isMobile === true) ? 12 : 8}>
                        {renderDateButtons()}
                    </Col>
                    <Col md={(isMobile === true) ? 0 : 4}>

                    </Col>
                </Col>
                <Col xs={12} lg={4} style={{backgroundColor: 'orange'}}>

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