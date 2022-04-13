import {Badge, Button, Card, Col, Row} from "react-bootstrap";
import Styles from "../components/Styles";
import React, {useEffect, useState, useRef} from "react";
import {Link} from "react-router-dom"
import mapboxgl, {Map, Marker} from "!mapbox-gl";

mapboxgl.accessToken =
    "pk.eyJ1IjoiYnJldHRtc21pdGgiLCJhIjoiY2t1NzFxNGt2MW9pNDJ2bzZqdmlibWJoZSJ9.lorLL3V1xySe1Gm75RvdNQ";

export default function Facility() {
    const probes = ['Tank 1', 'Tank 2', 'Tank 3', 'Tank 4', 'Tank 5', 'Tank 6']
    const [isMobile, setIsMobile] = useState(false);


    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState((isMobile) ? 55.51 : 55.47);
    const [lat, setLat] = useState((isMobile) ? -4.52 : -4.68);
    const [zoom, setZoom] = useState(10);

    function buildMarker(name,lat,lng){
        return {
            name:name,
            lat:lat,
            lng:lng
        }
    }

    const markers = [
        buildMarker("Baier Ternay",-4.6357323, 55.3729638),
        buildMarker("Port Launay" -4.6547483,55.3919732),
    ]

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/dark-v10",
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on("move", () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
        map.current.on('load', function() {
            markers.forEach(marker=>{
                const whatever = new Marker()
                    .setLngLat([marker.lng,marker.lat])
                    .addTo(map.current);
            })
        });

    });

    // Add zoom and rotation controls to the map.


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

    function renderProbes() {
        return (
            probes.map((probe, index) => {
                const _do = (index === 3) ? 6.5 : (Math.random() + 8.1).toFixed(3)
                let color = {}
                if (index === 3) {
                    color = {backgroundColor: '#d9534f'}
                }

                return (
                    <Row className={'bg-light'}
                         style={{...Styles.BootstrapCenter, margin: 20, padding: 10, borderRadius: 10}}>
                        <Col xs={4} sm={3} style={Styles.BootstrapCenter}>
                            <Link to={"/probe"}>
                                <Button variant={'primary'}>{probe}</Button>
                            </Link>
                        </Col>
                        {!isMobile && <Col sm={3} style={Styles.BootstrapCenter}>
                            Probe Name
                        </Col>}
                        <Col xs={8} sm={6} style={Styles.BootstrapCenter}>
                            <Col xs={4} style={{...Styles.facililitesCol, ...color}}>
                                {_do}
                            </Col>
                            <Col xs={4} style={Styles.facililitesCol}>
                                {(Math.random() + 26).toFixed(3)}
                            </Col>
                            <Col xs={4} style={Styles.facililitesCol}>
                                {(Math.random() + 7.5).toFixed(3)}
                            </Col>
                        </Col>
                    </Row>
                )
            })
        )
    }

    return (
        <Row className={'bg-white'}>
            <Col xs={12} xl={9} style={{height: '95vh', backgroundColor: 'rgb(30,44,75)'}}>
                <div ref={mapContainer} style={{height: "100%", width: '100%'}}/>
            </Col>
            <Col xs={12} xl={3} style={{...Styles.BootstrapCenter, height: '95vh', backgroundColor: 'rgb(30,44,75)'}}>
                <Card style={{textAlign: 'center'}}>
                    <Card.Body>
                        <Card.Title style={{padding: '1em'}}>
                            <h3>SURF</h3>
                        </Card.Title>
                        <Card.Text>
                            Facility Status: <Badge bg={'success'}>Within Specifications</Badge>
                        </Card.Text>
                        <Row style={{padding: "0.5em"}}><Button variant={'secondary'}>Set Notification Contacts</Button></Row>
                        <Row style={{padding: "0.5em"}}><Button variant={'secondary'}>Send Test
                            Notification</Button></Row>
                        <Row style={{padding: "0.5em"}}><Button variant={'primary'}>Export Data</Button></Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}