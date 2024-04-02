import React from 'react';
import {SimpleGrid, Box, Image, Text, Stack, VStack, Heading} from '@chakra-ui/react';

const ProductGrid = () => {
    const products = [{
        imageUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExem5kcW52ZHJ1dHNhaTFtNmVtcmpzM3JwaWxkbXJ0d243dDJ6aHF3NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Xe6OkE0RuxNukMe70a/giphy.gif',
        description: 'Product 1 Description'
    }, {
        imageUrl: '<img src="https://i.ibb.co/gS0rcX4/pheonix-top.png" alt="pheonix-top" border="0">',
        description: 'Product 2 Description'
    }, {
        imageUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTc4Z2N5NmZoNmsxZzR4cHhqcmd0MjQ5eXRlOW1veGt3cGd2cDVwciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZtZFfkZfBLF3UBYSqv/giphy.gif',
        description: 'Product 3 Description'
    }, {
        imageUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2ppMWpqejg4dTZhcXRqN2QwZm54NXp1M3RnOWJqdXYxNjBtNzIyYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hn5qBO5pEKLaKIlMCr/giphy.gif",
        description: 'Product 4 Description'
    }];

    return (
        <Box textAlign="center" m={5} borderRadius='lg'>
            <VStack spacing={5}>
                <Heading as="h2" size="xl">Our Products</Heading>
                <Text color="gray.500" fontSize="lg">Explore our range of products</Text>
                <SimpleGrid columns={2} spacing={10}>
                    {products.map((product, index) => (<Box key={index} textAlign="center">
                            <Image src={product.imageUrl} alt={`Product ${index + 1}`}/>
                            <Text mt={2}>{product.description}</Text>
                        </Box>))}
                </SimpleGrid>
            </VStack>
        </Box>

    );
};

export default ProductGrid;
