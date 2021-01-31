import React from "react";
import Embed from "./embed";


export default function Sandbox (){
    const codeSrc = "https://codepen.io/waymond91/embed/yLVyYOq?height=308&theme-id=light&default-tab=js,result"
    const content = "A bunch of random text here.A bunch of random text here. A bunch of random text here."
    return(
        <div>
            <Embed
                src={codeSrc}
                weakTitle="Software"
                strongTitle="Design"
                subheading="A Simple Tide Chart"
                content={content}
                instructions="Make sure to scroll down the right window so you can view the whole year."
            ></Embed>
        </div>
    )
}
