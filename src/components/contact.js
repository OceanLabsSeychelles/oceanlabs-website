import React, { useState } from "react";
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';

export default function Contact() {
    const [lat, setLat] = useState(-4.57684230593938);
    const [lng, setLng] = useState(55.46289122634377);
    const [zoom, setZoom] = useState(13);
    const center = [-4.6796, 55.492];

    const leafletStyle = {
        height: "800px",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%"
    };

    const stmUrl = "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.png";
    const stmAttr = '&copy; <a href"https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

    const osmUrl = "https://{s}.tile.osm.org/{z}/{x}/{y}.png";
    const osmAttr =
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';


    return (
        <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}
