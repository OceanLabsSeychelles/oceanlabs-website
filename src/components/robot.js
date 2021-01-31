import React from "react";
import Embed from "./embed";


export default function Robot (){
    const robotSrc = "https://myhub.autodesk360.com/ue2c021aa/shares/public/SH56a43QTfd62c1cd9680b5aadca717ef4b6?mode=embed"
    const content = "A bunch of random text here.A bunch of random text here. A bunch of random text here."
    return(
        <div>
            <Embed
                src={robotSrc}
                weakTitle="Hardware"
                strongTitle="Design"
                subheading="Telepresence Robot"
                content={content}
                instructions = "Select the box in the top left corner to view the component tree,
                        isolate sub-components, and select views of the model"
            ></Embed>
        </div>
    )
}
