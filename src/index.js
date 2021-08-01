import React from 'react';
import App from './App'
import { hydrate, render } from "react-dom";
import dotenv from "dotenv"
import ContextProvider from './Service/context/ContextProvider';

dotenv.config();


const reactApp = (
    <ContextProvider>
        <App />
    </ContextProvider>
)

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(reactApp, rootElement);
} else {
  render(reactApp, rootElement);
}