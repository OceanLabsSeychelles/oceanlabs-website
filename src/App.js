import React from "react";
import "../node_modules/react-vis/dist/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import "./styles.css"
import ProbeView from "./pages/ProbeView"
import About from "./pages/About";
import BuoyDemo from "./pages/BuoyDemo";
import ProbeProvider from "./context/ProbeProvider";
import BackendProvider from "./context/BackendProvider";
import Facility from "./pages/Facility";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function App() {

    return (
        <BackendProvider>
            <ProbeProvider>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route index element={<BuoyDemo/>} />
                        <Route path="about" element={<About />} />
                        <Route path="facility" element={<Facility/>}/>
                        <Route path="probe" element={<ProbeView/>}/>
                    </Routes>
                </BrowserRouter>
            </ProbeProvider>
        </BackendProvider>
    );
}