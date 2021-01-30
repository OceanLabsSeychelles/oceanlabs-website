import React from "react";
import Fusion from "./fusion";


export default function Robot (){
    const robotSrc = "https://myhub.autodesk360.com/ue2c021aa/shares/public/SH56a43QTfd62c1cd9680b5aadca717ef4b6?mode=embed"
    const content = "A bunch of random text here.A bunch of random text here. A bunch of random text here."
    return(
        <div>
            <Fusion
                src={robotSrc}
                weakTitle="Hardware"
                strongTitle="Design"
                subheading="From Concept to Manufacture"
                content={content}
            ></Fusion>
        </div>
    )
}
