import {Button, Card, Col, Row, Badge} from "react-bootstrap";
import Styles from "../components/Styles";
import React, {useEffect, useState, useRef, useContext} from "react";
import mapboxgl, {Map, Marker} from "!mapbox-gl";
import {BackendContext} from "../context/BackendProvider";

mapboxgl.accessToken =
    "pk.eyJ1IjoiYnJldHRtc21pdGgiLCJhIjoiY2t1NzFxNGt2MW9pNDJ2bzZqdmlibWJoZSJ9.lorLL3V1xySe1Gm75RvdNQ";

export default function BuoyDemo() {
    const [isMobile, setIsMobile] = useState(false);
    const {Probes} = useContext(BackendContext);
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(55.72);
    const [lat, setLat] = useState(-4.31633);
    const [zoom, setZoom] = useState(12);
    const buoyMarker = new mapboxgl.Marker();



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

    async function fetchLastBuoyPost() {
        let response = await fetch("https://sfasurf-8806.restdb.io/rest/pilot?x-apikey=629678a3c4d5c3756d35a40e",
            {
                headers: {
                    'X-API-KEY': '629678a3c4d5c3756d35a40e',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            },
        );
        const data = await response.json();
        console.log(data);
        data.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
        const last = data[data.length - 1];
        console.log(last);
        buoyMarker.setLngLat([last.lng, last.lat]);
        buoyMarker.addTo(map.current);
    }

    useEffect(() => {
        fetchLastBuoyPost()
    }, [])
    if(!isMobile) {
        return (
            <Row className={"bg-white"}>
                <Col
                    xs={12}
                    xl={8}
                    style={{height: "95vh", backgroundColor: "rgb(30,44,75)"}}
                >
                    <div ref={mapContainer} style={{height: "100%", width: "100%"}}/>
                </Col>
                <Col
                    xs={12}
                    xl={4}
                    style={{
                        ...Styles.BootstrapCenter,
                        height: "95vh",
                        backgroundColor: "rgb(30,44,75)"//"rgb(30,44,75)"
                    }}
                >
                </Col>
            </Row>
        );
    }else{
        return <></>
    }
}
