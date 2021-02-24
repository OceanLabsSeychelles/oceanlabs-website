
// Content for the OceanLab's "Software Design" page

import React from "react";
import Embed from "./embed";


export default function Sandbox (){
    const codeSrc = "https://codepen.io/waymond91/embed/yLVyYOq?height=308&theme-id=light&default-tab=js,result"
    
    //const content = `I'm really not too attached to this demo, it doesn't really showcase the right tech`
    // I commented this out as the page is publicly accessible...
    
    return(
        <div>
            <Embed
                src={codeSrc}
                weakTitle="Software"
                strongTitle="Design"
                subheading="A Simple Tide Chart"
                content={[content]}
                instructions="Make sure to scroll down the right window so you can view the whole year."
            ></Embed>
        </div>
    )
}
