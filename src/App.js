import React, {useContext} from "react";
import "../node_modules/react-vis/dist/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import "./styles.css"
import ProbeView from "./pages/ProbeView"
import Home from "./pages/Home";
import BuoyLive from "./pages/BuoyLive";
import Facility from "./pages/Facility";
import BuoyStatic from "./pages/BuoyStatic";
import DataViewer from "./pages/DataViewer";
import Capture from "./pages/Capture"
import DisplayCapture from "./pages/DisplayCapture";
import About from "./pages/About"
import PCB from "./pages/Pcb";
import Sandbox from "./pages/Sandbox";
import Robot from "./pages/Robot";
import {RestDbContext} from "./context/RestDbProvider";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function App() {
    const {restDb} = useContext(RestDbContext);
    if(restDb.state !== 'idle') {
        return (
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="facility" element={<Facility/>}/>
                    <Route path="robot" element={<Robot/>}/>
                    <Route path="sandbox" element={<Sandbox/>}/>
                    <Route path="pcb" element={<PCB/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="probe" element={<ProbeView/>}/>
                    <Route path="buoystatic" element={<BuoyStatic/>}/>
                    <Route path="buoylive" element={<BuoyLive/>}/>
                    <Route path="data" element={<DataViewer/>}/>
                    <Route path="capture" element={<Capture/>}/>
                    <Route path="display" element={<DisplayCapture/>}/>
                </Routes>
            </BrowserRouter>
        );
    }else{
        return(
            <></>
        )
    }
}