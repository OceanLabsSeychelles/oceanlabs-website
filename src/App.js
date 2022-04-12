import React from "react";
import "../node_modules/react-vis/dist/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import "./styles.css"
import Home from "./pages/Home"
import About from "./pages/About";
import Facility from "./pages/Facility";
import ProbeProvider from "./context/ProbeProvider";
import BackendProvider from "./context/BackendProvider";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function App() {

    return (
        <BackendProvider>
            <ProbeProvider>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route index element={<Facility/>} />
                        <Route path="about" element={<About />} />
                        <Route path="probe" element={<Home/>}/>
                    </Routes>
                </BrowserRouter>
            </ProbeProvider>
        </BackendProvider>
    );
}