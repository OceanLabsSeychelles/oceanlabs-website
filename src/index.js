import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ContextWrapper from "./context/ContextWrapper";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContextWrapper/>
  </StrictMode>
);
