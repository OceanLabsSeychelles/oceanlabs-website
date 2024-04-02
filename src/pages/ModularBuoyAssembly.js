
// Content for the OceanLab's "Electronic Design" page

import React from "react";
import Embed from "../components/Embed";

export default function ModularBuoyAssembly (){
    const pcbSrc="https://myhub.autodesk360.com/ue2fa5e15/shares/public/SHd38bfQT1fb47330c99c0ad548516bc41d6?mode=embed"

    let p1 = `We have years of experience in designing, manufacturing, and programming custom embedded systems.
    This allows us to hit the sweet spot between price-point, form-factor, performance and manufacturability.`

    let p2 = `We have already had our first designs manufactured and delivered to the Seychelles, and have firm control over 
    our PCB supply line here in the Indian Ocean.` // I have to think about this one...
    return(
        <div>
            <Embed
                src={pcbSrc}
                content={[p1, p2]}
                weakTitle="Sea"
                strongTitle="Scope"
                subheading="Modular Evironmental Sensing Framework"
                instructions = "Select the box in the top left corner to view the component tree,
                isolate sub-components, and select views of the model."
            ></Embed>
        </div>
    )
}
