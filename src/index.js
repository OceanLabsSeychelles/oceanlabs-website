import { StrictMode } from "react";
import { render } from 'react-snapshot';
import ContextWrapper from "./context/ContextWrapper";


render(
  <StrictMode>
    <ContextWrapper/>
  </StrictMode>
    ,document.getElementById('root')
);