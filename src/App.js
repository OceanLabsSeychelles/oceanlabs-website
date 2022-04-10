import React from "react";
import "../node_modules/react-vis/dist/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import "./styles.css"
import Home from "./pages/Home"
import {ProbeProvider} from "./context/ProbeProvider";


export default function App() {

    return (
        <ProbeProvider>
            <Header/>
            <div>

                <Home/>
            </div>
        </ProbeProvider>
    );
}