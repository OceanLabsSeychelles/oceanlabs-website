import {Col, Row} from "react-bootstrap";
import Styles from "../components/Styles";
import React, {useEffect, useState, useRef, useContext} from "react";
import mapboxgl, {Map} from "!mapbox-gl";
import {BackendContext} from "../context/SampleDataProvider";
import {RestDbContext} from "../context/RestDbProvider";

mapboxgl.accessToken =
    "pk.eyJ1IjoiYnJldHRtc21pdGgiLCJhIjoiY2t1NzFxNGt2MW9pNDJ2bzZqdmlibWJoZSJ9.lorLL3V1xySe1Gm75RvdNQ";

export default function Capture() {
    const [location, setLocation] = useState([]);
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(55.72);
    const [lat, setLat] = useState(-4.31633);
    const [zoom, setZoom] = useState(9);


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                let coordinates = [position.coords.latitude, position.coords.longitude];
                setLocation(coordinates);
                console.log(coordinates);
            });
        }
    }, [])

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

    return (
        <Row style={{height: '95vh'}} className={"bg-white"}>
            <Col
                style={{height: "100%", backgroundColor: "rgb(30,44,75)"}}
            >
                <div ref={mapContainer} style={{height: "100%", width: "100%"}}/>
            </Col>
        </Row>
    )
    //}
}
