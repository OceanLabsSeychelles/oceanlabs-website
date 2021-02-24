import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Robot from "./components/robot";
import PCB from "./components/pcb";
import Sandbox from "./components/sandbox";
import Contact from "./components/contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

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
          <Route path="/sandbox" component={Sandbox}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}
