import React from 'react'
import ProbeProvider from "./ProbeProvider";
import RestDbProvider from "./RestDbProvider";
import SampleDataProvider from "./SampleDataProvider";
import App from "../App"
export default function ContextWrapper({children}){
    return(
        <RestDbProvider>
            <SampleDataProvider>
                <ProbeProvider>
                    <App/>
                </ProbeProvider>
            </SampleDataProvider>
        </RestDbProvider>
    )
}