import React from "react";
import {EmailIcon} from "@chakra-ui/icons";
import {chakra, Box, useColorModeValue, Spacer, Button, Link, Flex, HStack} from "@chakra-ui/react";
const sample = require("../media/bg_trim.mp4");

export default function Hero() {
    const textColor = useColorModeValue("gray.900", "white");
    const overlayColor = useColorModeValue("rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0)");

    const BackgroundVideoBox = ({ children }) => {
        return (
            <Box position="relative" height="100vh" width="full" overflow="hidden">
                <video
                    autoPlay
                    loop
                    muted
                    preload="auto"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <source src={'https://sfasurf-8806.restdb.io/media/660c711e04114f0f00000992'} type="video/mp4" />
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
                    alignItems={{ base: "center", lg: "start" }} // Responsive alignment
                    color="white"
                    p={{ base: 4, sm: 6, lg: 8 }} // Added padding for spacing from the edges
                    style={{
                        backgroundColor: overlayColor,
                    }}
                >
                    {children}
                </Box>
            </Box>
        );
    };

    return (
        <BackgroundVideoBox>
            <Box
                // pt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
                // pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
                py = {10}
                px={10}
                backgroundColor={"rgba(1, 1, 1, .7)"}
                borderRadius={10}
                textAlign={{ base: "center", lg: "left" }} // Responsive text alignment
                justifyContent={{base: "center", lg: "flex-start"}}
                shadow={'lg'}
            >
                <chakra.h1
                    fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                    letterSpacing="tight"
                    lineHeight="short"
                    fontWeight="extrabold"
                    color="white"
                >
                    <chakra.span display={{ base: "block", xl: "inline" }}>
                        OceanLabs{" "}
                    </chakra.span>
                    <chakra.span
                        display={{ base: "block", xl: "inline" }}
                        color="blue.200"
                    >
                        Seychelles
                    </chakra.span>
                </chakra.h1>
                <chakra.h4
                    my={{ base: 3}}
                    mx={{ sm: "auto", lg: 0 }}
                    color='gray.300'
                >
                    Your conservation engineering partners.
                </chakra.h4>
                    <Button mt={5} leftIcon={<EmailIcon />} colorScheme='blue' variant='solid'
                            as="a"
                            href="mailto:info@oceanlabs.io"
                            _hover={{
                                bg: 'inherit', // Adjust this value to match your desired hover background color
                                color: 'inherit', // This sets the text color on hover. Change as needed.
                            }}
                    >
                        Contact Us
                    </Button>
                <Spacer/>
            </Box>
        </BackgroundVideoBox>
    );
}
