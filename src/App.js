import React from "react";
import "../node_modules/react-vis/dist/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import "./styles.css"
import ProbeView from "./pages/ProbeView"
import About from "./pages/About";
import BuoyLive from "./pages/BuoyLive";
import ProbeProvider from "./context/ProbeProvider";
import SampleDataProvider from "./context/SampleDataProvider";
import RestDbProvider from "./context/RestDbProvider";
import Facility from "./pages/Facility";
import BuoyStatic from "./pages/BuoyStatic";
import DataViewer from "./pages/DataViewer";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function App() {

    return (
        <RestDbProvider>
            <SampleDataProvider>
                <ProbeProvider>
                    <BrowserRouter>
                        <Header/>
                        <Routes>
                            <Route index element={<About/>}/>
                            <Route path="facility" element={<Facility/>}/>
                            <Route path="probe" element={<ProbeView/>}/>
                            <Route path="buoystatic" element={<BuoyStatic/>}/>
                            <Route path="buoylive" element={<BuoyLive/>}/>
                            <Route path="data" element={<DataViewer/>}/>
                        </Routes>
                    </BrowserRouter>
                </ProbeProvider>
            </SampleDataProvider>
        </RestDbProvider>
    );
}