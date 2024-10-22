import {Button, Card, Col, Row, Badge} from "react-bootstrap";
import Styles from "../components/Styles";
import React, {useEffect, useState, useRef, useContext} from "react";
import mapboxgl, {Map, Marker} from "!mapbox-gl";
import BuoyPlots from "../components/BuoyPlots";
import {BackendContext} from "../context/SampleDataProvider";
import {chakra} from "@chakra-ui/react";
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken =
    "pk.eyJ1IjoiYnJldHRtc21pdGgiLCJhIjoiY2t1NzFxNGt2MW9pNDJ2bzZqdmlibWJoZSJ9.lorLL3V1xySe1Gm75RvdNQ";

export default function BuoyStatic() {
    const [isMobile, setIsMobile] = useState(false);
    const {Probes} = useContext(BackendContext);
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(55.51);
    const [lat, setLat] = useState(-4.52);
    const [zoom, setZoom] = useState(10);

    useEffect(() => {
        if (!map.current) return;
        if (Probes.visible) {
            map.current.flyTo({
                center: [lng, lat],
                zoom: 15,
                essential: true
            });
        } else {
            map.current.flyTo({
                center: [55.51, -4.52],
                zoom: 10,
                essential: true
            });
        }
    }, [Probes.visible]);

    function buildMarker(name, lat, lng) {
        return {
            name: name,
            lat: lat,
            lng: lng
        };
    }

    const markers = [
        buildMarker("Baie Ternay", -4.6357323, 55.3729638),
        buildMarker("Curieuse", -4.286085864745644, 55.734821213204626),
        buildMarker("Silhouette", -4.4752999135551255, 55.252023257325185),
        buildMarker("Ile Coco", -4.309699174357993, 55.86620032938555)
    ];

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/dark-v10",
            center: [lng, lat],
            zoom: zoom,
            attributionControl: false
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on("move", () => {
            //setLng(map.current.getCenter().lng.toFixed(4));
            //setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
        map.current.on("load", function () {
            markers.forEach((marker) => {
                if (!isNaN(marker.lng) && !isNaN(marker.lat)) {
                    new Marker()
                        .setLngLat([marker.lng, marker.lat])
                        .addTo(map.current);
                }
            });
        });
    });

    useEffect(() => {
        handleWindowSizeChange();
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    function handleWindowSizeChange() {
        if (window.innerWidth < 762) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    function renderRight() {
        if (!Probes.visible) {
            return (
                <Card style={{textAlign: "center", width: '80%'}}>
                    <Card.Body>
                        <Card.Title style={{padding: "1em"}} >
                            <chakra.h3 color={"black"}>View Deployment</chakra.h3>
                        </Card.Title>
                        <Card.Text>
                            {markers.map((marker) => (
                                <Row key={marker.name} style={{padding: 10, }}>
                                    <Col xs={9} style={Styles.BootstrapCenter}>
                                        <Button
                                            style={{width: '90%'}}
                                            variant={"outline-dark"}
                                            key={marker.name}
                                            onClick={() => {
                                                setLng(marker.lng);
                                                setLat(marker.lat);
                                                Probes.setBuoy(marker.name);
                                                Probes.setVisible(true);
                                            }}
                                        >
                                            {marker.name}
                                        </Button>
                                    </Col>
                                    <Col xs={3} style={Styles.BootstrapCenter}>
                                        <Badge bg={'success'}>Online</Badge>
                                    </Col>
                                </Row>
                            ))}
                        </Card.Text>
                    </Card.Body>
                </Card>
            );
        } else {
            return (
                <BuoyPlots
                    isMobile={isMobile}
                />
            );
        }
    }

    if(!isMobile) {
        return (
            <Row className={"bg-white"}>
                <Col
                    xs={12}
                    xl={8}
                    style={{height: "95vh"}}
                >
                    <div ref={mapContainer} style={{height: "100%", width: "100%"}}/>
                </Col>
                <Col
                    xs={12}
                    xl={4}
                    style={{
                        ...Styles.BootstrapCenter,
                        height: "95vh",
                    }}
                >
                    {renderRight()}
                </Col>
            </Row>
        );
    }else{
        return (
            <Col
                xs={12}
                xl={4}
                style={{
                    ...Styles.BootstrapCenter,
                    height: "95vh",
                    backgroundColor: "rgb(30,44,75)"//"rgb(30,44,75)"
                }}
            >
                {renderRight()}
            </Col>
        );
    }

}
