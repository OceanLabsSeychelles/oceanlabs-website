import React from "react";
import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    VisuallyHidden,
    HStack,
    Button,
    IconButton,
    useDisclosure,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    VStack,
    CloseButton,
    Image,
    Link,
    useColorMode,
} from "@chakra-ui/react";
import { AiOutlineMenu} from "react-icons/ai";
import { ChevronDownIcon } from '@chakra-ui/icons'; // Add this for the dropdown icon
import {useNavigate} from "react-router-dom";
import "react-vis/dist/style.css";
const logo = require("../media/logo.png");
import { BsSun, BsFillMoonStarsFill } from "react-icons/bs";


export default function App() {
    const navigate = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode();
    const gradientBg = useColorModeValue('linear(to-br, teal.100, blue.200)', 'linear(to-br, teal.900, blue.800)');
    const { isOpen, onOpen, onClose } = useDisclosure();

    const navItems = [
        { name: 'Home', to: '/'},
        { name: 'Deployment Demo', to: '/buoystatic'},
        { name: 'About DFADs', to: '/aboutdfad' },
    ];

    return (
        <chakra.header bgGradient={gradientBg} w="full" px={{ base: 2, sm: 4 }} py={1} shadow="md" >
            <Flex alignItems="center" justifyContent="space-between" mx="auto">
                <Flex align="center">
                    <Link onClick={()=>{navigate("/")}}>
                    <Image src={logo} boxSize="60px" alt="Logo" />
                    </Link>
                    <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                        Ocean<b>Labs</b>
                    </chakra.h1>
                </Flex>
                <HStack spacing={1} display={{ base: 'none', md: 'flex' }}>
                    {navItems.map((item) => (
                        <Button
                            key={item.name}
                            variant="ghost"
                            onClick={() => navigate(item.to)}
                        >
                            {item.name}
                        </Button>
                    ))}
                </HStack>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <BsSun /> : <BsFillMoonStarsFill />}
                </Button>
                <IconButton
                    display={{ base: "flex", md: "none" }}
                    aria-label="Open menu"
                    icon={<AiOutlineMenu />}
                    onClick={onOpen}
                    variant="ghost"
                />
                <VStack
                    pos="absolute"
                    top={0}
                    left={0}
                    right={0}
                    display={isOpen ? "flex" : "none"}
                    p={2}
                    flexDirection="column"
                    bg={useColorModeValue("blue.200", "blue.800")}
                    spacing={3}
                    rounded="sm"
                    shadow="sm"
                    zIndex={1000}
                >
                    <CloseButton onClick={onClose} />
                    {navItems.map((item) => (
                        <Button key={item.name} w="full" variant="ghost" onClick={() => navigate(item.to)}>
                            {item.name}
                        </Button>
                    ))}
                    {/* Add more buttons or content for the mobile menu as needed */}
                </VStack>
            </Flex>
        </chakra.header>
    );
}
