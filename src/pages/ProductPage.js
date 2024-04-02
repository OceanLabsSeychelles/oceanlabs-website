import React from 'react';
import { Box, Image, Heading, Text, VStack, Flex, Container } from '@chakra-ui/react';
import BrowserFrame from "react-browser-frame";

const ProductPage = () => {
    return (
        <Container maxW={'90vw'} mt={6}>
        <VStack spacing={10} >

            <Flex direction={{ base: "column", md: "row" }}>
                <Box position="relative" flex="1">
                    <Image
                        src="https://i.ibb.co/xYxcYNg/328543662-1292950251251412-9047827657123122447-n.jpg"
                        alt="Hardware Product"
                        position="absolute"
                        top="0"
                        left="0"
                        style={{ filter: 'brightness(65%)', width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        right="0"
                        p={5}
                        width="full"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center" // Center align items horizontally
                        textColor="white"
                    >
                        <Heading as="h1" size="lg" textAlign="center">NEST Monitor</Heading>
                        <Text mt={3} textAlign="center">Modern sea turtle nest monitoring for researchers and conservationists</Text>
                    </Box>
                </Box>

            <Box flex="1" >
            <BrowserFrame url="www.oceanlabs.io/productportal" style={{ width: '100%' }}>
                <div style={{ width: '100%', position: 'relative'}}>
                    <Image
                        borderRadius={'5'}
                        src="https://i.ibb.co/hR0b9Zf/nest-screenshot.png"
                        alt="Software UI"
                        style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
            </BrowserFrame>
            </Box>
            </Flex>

        </VStack>
        </Container>
    );
};

export default ProductPage;
