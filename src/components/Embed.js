import React, { useState } from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    VStack,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    useStyleConfig,
    useColorModeValue
} from "@chakra-ui/react";

export default function Embed(props) {
    const [loaded, setLoaded] = useState("false");
    const [show, setShow] = useState(true);
    const gradientBg = useColorModeValue('linear(to-br, teal.100, blue.200)', 'linear(to-br, teal.800, blue.800)');


    let iframeStyle = {
        width: "100%",
        height: "91vh",
    };

    let titleStyle = {
        paddingTop: "1.5rem",
        paddingLeft: "1rem",
        paddingBottom: "1rem",
    };

    let loadHandler = () => {
        setLoaded("true");
    };

    function renderContent() {
        return props.content.map((item, index) => (
            <Text textAlign="left" key={index}>{item}</Text>
        ));
    }

    return (
        <Flex  direction={{ base: "column", md: "row" }} justify="center" align="center" m="auto">
            <Box width={{ base: "100%", md: "25%" }} p={4}>
                <VStack spacing={4} align="stretch">
                    <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                        <Box style={titleStyle} bgGradient={gradientBg}>
                            <Heading fontSize="xl">
                                {props.weakTitle} <b>{props.strongTitle}</b>
                            </Heading>
                        </Box>
                        <Text mt={4} style={{ paddingLeft: "1rem", paddingTop: "1rem" }}>
                            {props.subheading}
                        </Text>
                        <Box p={5}>
                            {renderContent()}
                            <Text textAlign="left"><i>{props.instructions}</i></Text>
                        </Box>
                    </Box>
                    <Alert status="warning">
                        <AlertIcon />
                        <AlertTitle mr={2}>Loading Delay</AlertTitle>
                        <AlertDescription>Please wait for the demo to load.</AlertDescription>
                    </Alert>
                </VStack>
            </Box>
            <Box width={{ base: "100%", md: "75%" }} align="center">
                <iframe onLoad={loadHandler} src={props.src} style={iframeStyle} title="demo" />
            </Box>
        </Flex>
    );
}
