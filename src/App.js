import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Robot from "./components/robot";
import PCB from "./components/pcb";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import fp from "fingerprintjs2";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/robot" component={Robot} />
            <Route path="/pcb" component={PCB} />
          <Route path="/about" component={About}/>
        </Switch>
      </Router>
    </div>
  );
}
