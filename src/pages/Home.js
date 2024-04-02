import React from 'react';
import {
    Box,
    Flex,
    Text,
    HStack,
    SimpleGrid,
    Image,
    Link,
    Heading,
    Container,
    Spacer
} from '@chakra-ui/react';
import Hero from "../components/Hero"

function HomePage() {
    return (
        <Container maxW="7xl">
            <Hero mt={"1rem"}/>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} my={6}>
                <ServiceBox
                    title="SeaScope"
                    description="Highly configurable smart sonde - record audio, video, and water quickly and conveniently."
                    url="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejJ0YWY1NDNheHJjZHNlZnZmd3JhNm1tcGl3ZTc2dm52Z28xeXhlZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gNWUQmbwXyMVxf9T0V/giphy-downsized-large.gif"
                />
                <ServiceBox
                    title="Phoenix"
                    description="Solar and iridium equiped remote sensing buoy - made from recycled FAD buoys."
                    url="https://i.ibb.co/gS0rcX4/pheonix-top.png"
                />
                <ServiceBox
                    title="FieldScribe"
                    description="Manage your teams field data quickly and efficiently. Build forms once and share."
                    url="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWs2ejJqYmF4NWoxeXBzbmY2bjVqa2M5a2hneDlkbGg1YTBnNWJlbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jQpGNXodR57jhirFjn/giphy.gif"
                />

            </SimpleGrid>
            <Spacer/>
            {/* Footer */}
            <Flex justifyContent="space-between" py={4} borderTop="1px" borderColor="gray.200">
                <Text>Oceanlabs Seychelles © 2024</Text>
                <Flex>
                    <Link href="mailto:info@oceanlabs.io" mx={2}>Contact: info@oceanlabs.io</Link>
                </Flex>
            </Flex>
        </Container>
    );
}

// Service Box Component
const ServiceBox = ({ title, description, url }) => (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
        <Heading fontSize="xl">{title}</Heading>
        <Image src={url}/>
        <Text mt={4}>{description}</Text>
    </Box>
);

export default HomePage;
