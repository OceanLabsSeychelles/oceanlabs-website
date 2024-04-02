import { StrictMode } from "react";
import { Provider } from 'react-redux';
import Header from "./components/Header"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store from './store';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import SampleDataProvider from "./context/SampleDataProvider";
import Home from "./pages/Home";
import Buoy from "./pages/ModularBuoy";
import BuoyStatic from "./pages/BuoyStatic";
import ModularBuoyAssembly from "./pages/ModularBuoyAssembly";
import AboutDFAD from "./pages/AboutDFAD";
import BuoyConfigurations from "./pages/BuoyConfigurations";
import ProductPage from "./pages/ProductPage";

const colors = {
    brand: {
        50: "#ecefff",
        100: "#cbceeb",
        200: "#a9aed6",
        300: "#888ec5",
        400: "#666db3",
        500: "#4d5499",
        600: "#3c4178",
        700: "#2a2f57",
        800: "#181c37",
        900: "#080819"
    }
};
const config = {
    initialColorMode: "dark",
    useSystemColorMode: false
};

const theme = extendTheme({ colors, config });
function App() {
    return(
    <StrictMode>
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <SampleDataProvider>
                    <BrowserRouter>
                        <Header/>
                        <Routes>
                            <Route index element={<Home/>}/>
                            <Route path="buoy" element={<Buoy/>}/>
                            <Route path="buoystatic" element={<BuoyStatic/>}/>
                            <Route path="buoyassembly" element={<ModularBuoyAssembly/>}/>
                            <Route path="aboutdfad" element={<AboutDFAD/>}/>
                            <Route path="configs" element={<BuoyConfigurations/>}/>
                            <Route path="product" element={<ProductPage/>}/>
                        </Routes>
                    </BrowserRouter>
                </SampleDataProvider>
            </ChakraProvider>
        </Provider>
    </StrictMode>
    )
}

export default App;
