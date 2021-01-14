import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Design from "./components/design";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import fp from "fingerprintjs2";

export default function App() {

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
          let result = {};
          for (let i = 0; i < fp.length; i++) {
            result[fp[i].key] = fp[i].value;
          }

          // POST request using fetch inside useEffect React hook
          const requestOptions = {
            method: "POST",
            headers: {
              "cache-control": "no-cache",
              "x-apikey": "ed62052eec3071efd3fca20d32126496e0e96",
              "content-type": "application/json"
            },
            body: JSON.stringify({ fingerprint: result, ip: ip, time: new Date().toLocaleString() })
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
          <Route path="/design" component={Design} />
        </Switch>
      </Router>
    </div>
  );
}
