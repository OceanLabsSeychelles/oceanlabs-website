import React, { useState } from "react";
import Select from "react-select";
import "../styles.css"
export default function ModelViewer (props){
    const modelStyle = {
        paddingTop: "3rem",
        width: "100%",
        height:"90vh",
    }

    let [selected, setSelected] = useState(props.models[0]);
    let handleChange = (e) => {
        setSelected(e);
    };

    console.log(selected.label)

    return(
        <model-viewer
            style={modelStyle}
            src={selected.value}
            alt="A 3D model of an astronaut"
            auto-rotate
            camera-controls
            exposure="0.4"
            background-color="#70BCD1"
        >
            <div className="controls">
                <Select
                    onChange={handleChange}
                    options={props.models}
                    value={selected}
                />
            </div>
        </model-viewer>
    );
}

