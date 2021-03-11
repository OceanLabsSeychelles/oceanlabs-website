import React, { useState } from "react";
import { Card, Col, Media, Row } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../styles.css";

export default function Contact() {
    const daniel = require("../media/daniel.png");
    const brett = require("../media/brettshead.jpg");

    const [lat, setLat] = useState(-4.57684230593938);
    const [lng, setLng] = useState(55.46289122634377);
    const [zoom, setZoom] = useState(13);
    const center = [-4.6796, 55.492];
    const location = [lat, lng];

    const stmUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const stmAttr = '&copy; <a href"https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';


    return (
       <Row className="m-auto align-self-center">
           <Col xs={12} md={6} xl={3} >
               <br/>
                <Card bg="dark" text="light">
                    <Card.Header>
                        <h4>Contact Details</h4>
                    </Card.Header>
                    <Card.Body>
                  <Media>
                    <img
                        height={100}
                        width={100}
                        class="mr-3"
                        src={brett}
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>Brett Smith</h5>
                        <p style={{textAlign:"left", margin:"0"}}>WhatsApp: +248-284-3047</p>
                        <p style={{textAlign:"left", margin:"0"}}><i>brett@oceanlabs.io</i></p>

                    </Media.Body>
                  </Media>
                   <br/>
                   <Media>
                       <img
                           height={100}
                           width={100}
                           class="mr-3"
                           src={daniel}
                           alt="Generic placeholder"
                       />
                       <Media.Body>
                           <h5>Daniel Hugelmann</h5>
                           <p style={{textAlign:"left", margin:"0"}}>WhatsApp: +248-280-3609</p>
                           <p style={{textAlign:"left", margin:"0"}}><i>daniel@oceanlabs.io</i></p>
                       </Media.Body>
                   </Media>
                        <br/>
                        <h4>Contact Us</h4>
                        <form id="contact-form">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Email Address"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="5" placeholder="Tell us about you and your project :)"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </Card.Body>
                </Card>

               <br/>



           </Col>
           <Col xs={12} md={6} xl={9}>
               <div >
                   <MapContainer center={center} zoom={12} scrollWheelZoom={false}>
                       <TileLayer
                           attribution={stmAttr}
                           url={stmUrl}
                       />
                       <Marker position={location}>
                           <Popup>
                               Kreolfleurage <br /> Nort-East Point.
                           </Popup>
                       </Marker>
                   </MapContainer>
               </div>
           </Col>
       </Row>
    );
}
