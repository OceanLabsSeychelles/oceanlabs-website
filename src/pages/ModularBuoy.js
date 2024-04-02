import React, {useEffect} from "react";
import ProjectPage from "../components/ProjectPage";
import {useDispatch} from "react-redux";
import {setModel} from "../reducers/modelReducer";
import {framerActions} from "../reducers/framerReducer";
import projectLogs from "./buoyLogs"

export default function Buoy(){
    const collapsedColor = "rgb(133,208,183)";
    const expandedColor = "rgb(34,67,101)";
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setModel(projectLogs[0].model));
        dispatch(framerActions.setBackground(`linear-gradient(0deg,${expandedColor} 0%, ${collapsedColor} 100%)`));
    }, [])

    return(
        <ProjectPage
            projectLogs={projectLogs}
            modelBackground = {`linear-gradient(0deg,${expandedColor} 0%, ${collapsedColor} 100%)`}
            expandedColor={expandedColor}
            collapsedColor={collapsedColor}
        >
            <br/>
            <h4>Modular Buoy Framework</h4>
            <p>Assembly Videos</p>
            <br/>
        </ProjectPage>
    )
}