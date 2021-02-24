
// Content for the OceanLab's "Electronic Design" page

import React from "react";
import Embed from "./embed";
import ModelViewer from "./modelViewer";


export default function Robot (){
    const robotSrc = "https://myhub.autodesk360.com/ue2c021aa/shares/public/SH56a43QTfd62c1cd9680b5aadca717ef4b6?mode=embed"
    const model = require("../3dmodels/bot.glb")
    const poster1 = require("../media/botPoster1.png")
    const poster2 = require("../media/botPoster2.png")
    const poster3 = require("../media/botPoster3.png")

    let p1 = `We are familiar with the latest mechanical design and manfacturing techologies -
    and while we are experienced with deploying and operating custom systems literally half-way around the world, 
    we also understand the issues involved with importing and adapting new design paradigms to tropical islands like the Seychelles`

    let p2 = `This page shows a design completed for SLAB, a Neuroscience & Neurongineering Labratory at California's University at Santa Barbara.`


    /*
       <Embed
           src={robotSrc}
           weakTitle="Hardware"
           strongTitle="Design"
           subheading="Telepresence Robot"
           content={[p1, p2]}
           instructions = "Select the box in the top left corner to view the component tree,
           isolate sub-components, and select views of the model.
           Select the ruler in the lower tool tub to measure the distance between components."
       ></Embed>
   */

    return(
        <div>
            <ModelViewer
                src={model}
                weakTitle="Hardware"
                strongTitle="Design"
                subheading="Telepresence Robot"
                content={[p1, p2]}
                posters = {[poster1, poster2]}
                instructions = "Select the box in the top left corner to view the component tree,
                isolate sub-components, and select views of the model.
                Select the ruler in the lower tool tub to measure the distance between components."
            ></ModelViewer>
        </div>
    )
}
