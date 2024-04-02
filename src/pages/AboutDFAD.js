import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image, Text, Container, VStack } from "@chakra-ui/react";
import { useColorMode } from '@chakra-ui/react';

const AboutDFAD = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const { colorMode } = useColorMode();


    // Example data for the slides
    const slidesData = [
        {
            image: "https://cdn.hackaday.io/images/7533751688504213411.png",
            title: "What is a drifting FAD?",
            description : "Worldwide, Drifting Fish Aggregation Devices (𝗗𝗙𝗔𝗗𝘀) are used in fishing operations to attract fish for harvesting. " +
                "𝗗𝗙𝗔𝗗𝘀 are regularly left at sea due to the cost of their recovery. " +
                "These 𝗗𝗙𝗔𝗗𝘀 damage sensitive ecological habitats and contribute to ghost fishing and plastic pollution. " +
                "Low-income coastal communities bear the burden of this practice. " +
                "Many 𝗗𝗙𝗔𝗗𝘀 are accompanied by a satellite connected echosounder buoy for detecting fish and locating the 𝗗𝗙𝗔𝗗 at sea.\n\n" +
                "After the DFAD is launched from the fishing vessel, it will drift freely in the ocean until it either detects fish or runs ashore. In the Indian Ocean, a single purse-seining vessel is allowed to deploy 300 such DFADs a year depending on the region. Photo provided by Alex Hofford under the creative commons license."

        },
        {
            image: "https://cdn.hackaday.io/images/2318571688504213515.png",
            title: "How does a FAD work?",
            description: "The subsurface structure of the DFAD attracts marine life while its accompanying echo sounder buoy can remotely detect the prescence of tuna shoals. Photos provided by Alex Hofford under the creative commons license."
        },
        {
            image: "https://cdn.hackaday.io/images/3609181688504213567.png",
            title: "FAD Subsurface Structure",
            description: "This a top view of the sub-surface structure of a DFAD. Many DFADs have structure that extends 50 meters below the FAD. Photo provided by Alex Hofford under the creative commons license."
        },
        {
            image: "https://cdn.hackaday.io/images/9469721688504213598.png",
            title: "FADs create ghost nets",
            description: "While most are never recovered, here we see a crew of conservationists unentangling a DFAD that has grounded on a coral structure. Photo by Blue Safari Seychelles and is not for redistribution without their express consent."
        },
        {
            image: "https://cdn.hackaday.io/images/9935131688509348250.png",
            title: "How are FADs recovered?",
            description: "Recovering a grounded DFAD with echo sounder buoy in view. Photo by Blue Safari Seychelles and is not for redistribution without their express consent."
        },
        {
            image: "https://i.ibb.co/1Gr6Qrh/5883041681477171372-1.jpg",
            title: "An untapped resource",
            description: "Old, broken, or unused echo sounder buoys near a fishing port."
        }
    ];

    return (
        <Container maxW="container.xl">
            <VStack spacing={8} align="stretch">
                {slidesData.map((slide, index) => (
                    <Box key={index} p={5} borderRadius="lg" display="flex" flexDirection="column" alignItems="center" justifyContent="center" boxShadow="lg">
                        <Text fontSize="2xl" fontWeight="semibold" mb={3}>{slide.title}</Text>
                        <Text fontSize="md" mb={3}>{slide.description}</Text>
                        <Image src={slide.image} maxW="100%" maxH="60vh" objectFit="contain" alt={`Slide ${index + 1}`} />
                    </Box>
                ))}
            </VStack>
        </Container>
    );
};

export default AboutDFAD;
