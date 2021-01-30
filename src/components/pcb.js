import React from "react";
import Fusion from "./fusion";


export default function PCB (){
    const pcbSrc="https://myhub.autodesk360.com/ue2c021aa/shares/public/SH56a43QTfd62c1cd9683b67a5a17585e5c8?mode=embed"
    const content = "A bunch of random text here.A bunch of random text here. A bunch of random text here."
    return(
        <div>
            <Fusion
                src={pcbSrc}
                content={content}
                weakTitle="Electronic"
                strongTitle="Design"
            ></Fusion>
        </div>
    )
}
