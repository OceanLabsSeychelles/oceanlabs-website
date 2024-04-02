import {useState, useEffect} from "react";
import {motion} from "framer-motion";
import ReactPlayer from 'react-player/youtube'
import {useDispatch, useSelector} from "react-redux";
import {setModel, setIsPressed, modelActions} from "../reducers/modelReducer";
import {framerActions} from "../reducers/framerReducer";
import {logSelectors, logActions} from "../reducers/logsReducer";
import "./player.css"
const ProjectLog = (props) => {
    const dispatch = useDispatch();
    const [isXlScreen, setIsXlScreen] = useState(false);
    const [width, setWidth] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);
    const logs = useSelector(logSelectors);

    useEffect(() => {
        const handleResize = () => {
            setIsXlScreen(window.matchMedia("(min-width: 900px)").matches);
            setWidth(window.innerWidth);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if(!isExpanded)return;
        if(logs.index===props.index)return;
        setIsExpanded(false);
    }, [logs.index])

    const handleClick = () => {
        if(isExpanded)return;
        console.log(props);
        dispatch(logActions.setIndex(props.index));
        dispatch(setModel(props.model));
        dispatch(setIsPressed(false));
        dispatch(framerActions.setInitial(props.backdropVariants.initial));
        dispatch(framerActions.setFinal(props.backdropVariants.final));
        dispatch(modelActions.setScale(props.backdropVariants.scale));

        setIsExpanded(!isExpanded);
        setAnimationComplete(false);
    };

    return (
        <div style={{display: "flex", flexDirection: "row", position: "relative"}}>
            <div style={{display: "flex", alignItems: "center", position: "relative"}}>
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        height: "100%",
                        borderLeft: isExpanded ? "0px solid #01161E" : "2px solid #01161E",
                    }}
                ></div>

                <motion.div
                    key={props.index}
                    style={{
                        margin: ".5rem",
                        position: "relative",
                        left: "auto",
                        right: "auto",
                    }}
                    className="box"
                    onClick={handleClick}
                    animate={{
                        backgroundColor: isExpanded ? props.expandedColor : props.collapsedColor,
                        border: isExpanded ? "0.25px solid black" : "2px solid black",
                        height: isExpanded ? (isXlScreen ? "28vw" : "90vw") : "2rem",
                        width: isExpanded ? (isXlScreen ? "35vw" : "90vw") : "2rem",
                        borderRadius: isExpanded ? "10px" : "50%",
                        borderWidth: isExpanded ? "1px" : "0px",
                    }}
                    transition={{duration: 0.5}}
                    onAnimationComplete={() => setAnimationComplete(true)}
                >
                    {animationComplete && isExpanded && (
                        <div
                            style={{
                                padding: "1rem",
                                backgroundColor: "rgba(0,0,0,0)",
                                height: '100%',
                                borderRadius: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                overflow: "hidden",
                            }}
                        >
                            <div style={{ position:"absolute",top:"1rem",right:"1rem" }}>
                                <button
                                    style={{
                                        border: 'none',
                                        background: 'none',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => setIsExpanded(false)}
                                >
                                    Close
                                </button>
                            </div>
                            <h5 style={{paddingBottom:"10px", alignSelf:"flex-start"}}>{props.title}</h5>
                            <div
                            >
                                <ReactPlayer
                                    style={{padding:"1px"}}
                                    height={!isXlScreen?(width-32)*9/16:width*.35*9/16}
                                    width={!isXlScreen?width-32:width*.35}
                                    url={props.videoUrl}
                                    controls={true}
                                />
                            </div>
                            <p
                                style={{
                                    paddingTop: "1rem",
                                    fontSize: "1rem",
                                    letterSpacing: "0.5px",
                                    alignSelf:"flex-start"
                                }}>
                                {props.description}
                            </p>
                        </div>

                    )}
                </motion.div>
            </div>
            {!isExpanded && (
                <div style={{display: "flex", alignItems: "center"}}
                     onClick={handleClick}
                >
                    <h5>{props.title}</h5>
                </div>
            )}
        </div>
    );
};

export default ProjectLog;
