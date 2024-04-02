import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";
import {selectIsPressed, setIsPressed, selectModel} from "../../reducers/modelReducer";
import {useSelector, useDispatch} from "react-redux";
import {framerSelectors} from "../../reducers/framerReducer";
import Model3D from "./Model3D";


export default function Framer3D(props){
    const isPressed = useSelector(selectIsPressed);
    const backdropVariants = useSelector(framerSelectors);

    return(
        <div
            style={{
                position: "relative",
                backgroundColor:"cyan"
            }}
        >
            <Model3D
                background={props.background}
                height={props.modelHeight}
                model={props.model}
            >
                {/*<StampedText/>*/}
            </Model3D>
            <motion.div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
                className="media-container"
            >
                <motion.div
                    variants={backdropVariants}
                    animate={isPressed ? "final" : "initial"}
                    style={{
                        background:backdropVariants?.background===undefined ? "cyan" : backdropVariants.background,
                        height: "35%",
                        width: "35%",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                ></motion.div>
            </motion.div>
        </div>
    )

}
