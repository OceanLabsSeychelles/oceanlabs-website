import {setIsPressed} from "../../reducers/modelReducer";
import React from "react";
import {useDispatch} from "react-redux";

export default function Model3D(props) {
    const dispatch = useDispatch();
    return (
        <div
            onMouseDown={() => {
                dispatch(setIsPressed(true));
            }}
            onTouchStart={()=>{
                dispatch(setIsPressed(true));
            }}
        >
            <model-viewer
                style={{
                    height: props.height,
                    width: "100%",
                    zIndex: 1000,
                    position: "absolute",
                    top: "3rem",
                    left: 0,
                }}
                camera-orbit="180deg 75deg 10m"
                touch-action="pan-y"
                disable-zoom={true}
                camera-controls={true}
                auto-rotate={true}
                disable-tap={true}
                id="mv-demo"
                shadow-intensity="1"
                src={props.model}
                alt="A 3D model of an astronaut"
                poster="./spacesuit.jpg"
            >
                {props.children}
            </model-viewer>
        </div>
    );
}
