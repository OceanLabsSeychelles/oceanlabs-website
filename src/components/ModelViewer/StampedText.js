import React, {useState} from "react";
import {motion} from "framer-motion";

function StampedText() {
    const [isVisible, setIsVisible] = useState(false);

    // define initial and animate variants
    const variants = {
        initial: {
            opacity: 0,
            scale: 5,
            rotate: -30,
        },
        animate: {
            rotate: -30,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: 3
            }
        }
    };

    // set isVisible to true after 3 seconds
    setTimeout(() => {
        setIsVisible(true);
    }, 3000);

    return (
        <motion.h3
            style={{
                fontSize:'3rem',
                position: "absolute",
                left: "35%",
                bottom: "50%",
                color: "red",
                border: "5px solid red",
                borderRadius: "10px",
                padding: "10px",
                backgroundColor: "transparent",
                textBorder: "1px 1px black",
                justifySelf:'center',
                alignSelf:'center',
                textAlign:'center',
            }}
            variants={variants}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
        >
            Obsolete
        </motion.h3>
    );
}

export default StampedText;
