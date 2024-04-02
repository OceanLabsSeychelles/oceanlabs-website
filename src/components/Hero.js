import React from "react";
import { chakra, Box, useColorModeValue } from "@chakra-ui/react";
const sample = require("../media/website_bg.mp4")
export default function Hero() {
    // Determine the color mode for conditional styling
    const textColor = useColorModeValue("gray.900", "white");
    const overlayColor = useColorModeValue("rgba(0, 0, 0, .25)", "rgba(0, 0, 0, 0.5)");

    const BackgroundVideoBox = ({ children }) => {
        return (
            <Box position="relative" height="500px" width="full" overflow="hidden">
                <video
                    autoPlay
                    loop
                    muted
                    preload="auto"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover', // Cover the entire box
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)' // Center the video
                    }}
                >
                    <source src={sample} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Box
                    position="absolute"
                    top="0"
                    right="0"
                    bottom="0"
                    left="0"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    color="white"
                    style={{
                        backgroundColor: overlayColor,
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "full",
                        height: "full",
                    }}

                >
                    {children} {/* This is where your overlay content will go */}
                </Box>
            </Box>
        );
    };


    return (
        <BackgroundVideoBox
        >
            <Box
                px={{ base: 4, sm: 6, lg: 8 }}
                pt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
                pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
                textAlign={{ sm: "center", lg: "left" }}
                color={textColor}
            >
                <chakra.h1
                    fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                    letterSpacing="tight"
                    lineHeight="short"
                    fontWeight="extrabold"
                    color="inherit"
                >
                    <chakra.span display={{ base: "block", xl: "inline" }}>
                        OceanLabs{" "}
                    </chakra.span>
                    <chakra.span
                        display={{ base: "block", xl: "inline" }}
                        color="blue.300"
                        _dark={{ color: "blue.400" }}
                    >
                        Seychelles
                    </chakra.span>
                </chakra.h1>
                <chakra.h2
                    mt={{ base: 3, sm: 5, md: 5 }}
                    maxW={{ sm: "xl" }}
                    mx={{ sm: "auto", lg: 0 }}
                    color='gray.100'
                    _dark={{color:"gray.300"}}
                >
                   Your conservation engineering partners.
                </chakra.h2>
            </Box>
        </BackgroundVideoBox>
    );
}
