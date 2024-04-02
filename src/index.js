import { createRoot } from 'react-dom/client';
import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // create a root
import {ColorModeScript} from "@chakra-ui/react";

root.render(
    <>
        <ColorModeScript initialColorMode={"dark"} />
    <App />
        </>
);