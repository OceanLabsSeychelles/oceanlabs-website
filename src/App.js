import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  Button,
  FormControl
} from "react-bootstrap";
import Header from "./components/header";
import Home from "./components/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import fp from "fingerprintjs2";

export default function App() {
  const [fingerprint, setFingerprint] = useState();
  const [ipData, setIpData] = useState();
  const [time, setTime] = useState();

  const getFingerprint = () =>
      new Promise((resolve) => {
        fp.get((components) => {
          resolve(components);
        });
      });

  useEffect(() => {
    fetch("https://extreme-ip-lookup.com/json") // Get the IP data
        .then((res) => res.json())
        .then((ip) => Promise.all([ip, getFingerprint()])) // Get the fingerprint
        .then(([ip, fp]) => {
          setIpData(ip);
          var result = {};
          for (var i = 0; i < fp.length; i++) {
            result[fp[i].key] = fp[i].value;
          }
          setFingerprint(result);

          setTime(new Date().toLocaleString());

          // POST request using fetch inside useEffect React hook
          const requestOptions = {
            method: "POST",
            //url: "https://webtracking-c8d4.restdb.io/rest/visitors",
            headers: {
              "cache-control": "no-cache",
              "x-apikey": "ed62052eec3071efd3fca20d32126496e0e96",
              "content-type": "application/json"
            },
            body: JSON.stringify({ fingerprint: result, ip: ip, time: time })
            //json: true
          };
          fetch(
              "https://webtracking-c8d4.restdb.io/rest/visitors",
              requestOptions
          );
        });
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
