import React from "react";
import Embed from "./embed";


export default function PCB (){
    const pcbSrc="https://myhub.autodesk360.com/ue2c021aa/shares/public/SH56a43QTfd62c1cd9683b67a5a17585e5c8?mode=embed"
    const content = "A bunch of random text here.A bunch of random text here. A bunch of random text here."
    return(
        <div>
            <Embed
                src={pcbSrc}
                content={content}
                weakTitle="Electronic"
                strongTitle="Design"
                subheading="Waterproof GPS Beacon"
                instructions = "Select the box in the top left corner to view the component tree,
                        isolate sub-components, and select views of the model"
            ></Embed>
        </div>
    )
}
