import {Button, Col, Row} from "react-bootstrap";
import Styles from "../components/Styles";
import React, {useEffect, useState, useRef, useContext} from "react";
import mapboxgl, {Map} from "!mapbox-gl";
import {BackendContext} from "../context/SampleDataProvider";
import {RestDbContext} from "../context/RestDbProvider";

mapboxgl.accessToken =
    "pk.eyJ1IjoiYnJldHRtc21pdGgiLCJhIjoiY2t1NzFxNGt2MW9pNDJ2bzZqdmlibWJoZSJ9.lorLL3V1xySe1Gm75RvdNQ";

export default function Capture() {
    const [location, setLocation] = useState([0,0]);
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(55.72);
    const [lat, setLat] = useState(-4.31633);
    const [zoom, setZoom] = useState(9);

    const marker = new mapboxgl.Marker();

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    function success(pos) {
        var crd = pos.coords;

        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        marker.setLngLat([crd.longitude, crd.latitude]);
    }


    function errors(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    function locate(){
        console.log("I RAN")
        if (navigator.geolocation) {
            navigator.permissions
                .query({ name: "geolocation" })
                .then(function (result) {
                    if (result.state === "granted") {
                        console.log(result);
                        navigator.geolocation.getCurrentPosition(success);
                        //If granted then you can directly call your function here
                    } else if (result.state === "prompt") {
                        navigator.geolocation.getCurrentPosition(success, errors, options);
                    } else if (result.state === "denied") {
                        //If denied then you have to show instructions to enable location
                    }
                    result.onchange = function () {
                        console.log(result.state);
                    };
                });
        } else {
            alert("Sorry Not available!");
        }
    }

    useEffect(() => {
        locate();
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
        marker.setLngLat(location);
        marker.addTo(map.current);
    });

    return (
        <Col style={{height:'100vh'}}>
        <Row style={{height: '85%'}} className={"bg-white"}>
            <Col
                style={{height: "100%", backgroundColor: "rgb(30,44,75)"}}
            >
                <div ref={mapContainer} style={{height: "100%", width: "100%"}}/>
            </Col>
        </Row>
            <Row style={{...Styles.BootstrapCenter, backgroundColor:'lightgray', height:'15%'}}>
                <Col style={{...Styles.BootstrapCenter, margin: "1rem"}}>
                    <Button
                        style={{margin: "0.5em", width: "75%"}}
                    >
                        Capture
                    </Button></Col>
            </Row>
        </Col>

    )
    //}
}
