import {Col, Row} from "react-bootstrap";
import Styles from "../components/Styles";
import React, {useEffect, useState, useRef, useContext} from "react";
import mapboxgl, {Map} from "!mapbox-gl";
import {BackendContext} from "../context/SampleDataProvider";
import {RestDbContext} from "../context/RestDbProvider";

mapboxgl.accessToken =
    "pk.eyJ1IjoiYnJldHRtc21pdGgiLCJhIjoiY2t1NzFxNGt2MW9pNDJ2bzZqdmlibWJoZSJ9.lorLL3V1xySe1Gm75RvdNQ";

export default function BuoyLive() {
    const [isMobile, setIsMobile] = useState(false);
    const {Probes} = useContext(BackendContext);
    const {restDb} = useContext(RestDbContext)
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(55.72);
    const [lat, setLat] = useState(-4.31633);
    const [zoom, setZoom] = useState(9);

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
        if (restDb.state !== 'fetching' && restDb.state !== 'idle') {
            const buoyMarker = new mapboxgl.Marker();
            let popup = new mapboxgl.Popup();
            popup.setHTML(`<p><b>Capture Time (UTC):</b> ${restDb.lastBuoy.captureTime}<br/><b>Signal Strength (dB):</b> ${restDb.lastBuoy.rssi}<br/><b>Battery (V):</b> ${Number(restDb.lastBuoy.battery / 1024 * 3.3 * 1.97).toFixed(3)}<br/></p>`);

            buoyMarker.setLngLat([restDb.lastBuoy.lng, restDb.lastBuoy.lat]);
            buoyMarker.setPopup(popup);
            buoyMarker.addTo(map.current);
            map.current.setCenter([restDb.lastBuoy.lng, restDb.lastBuoy.lat]);
            map.current.setZoom(16);


        }
    }

    useEffect(() => {
        fetchLastBuoyPost()
    }, [restDb])
    /*
    if (!isMobile) {
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
    } else {

     */
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
