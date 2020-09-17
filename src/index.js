import React from 'react';
import ReactDOM from "react-dom"
import App from './App'

import dotenv from "dotenv"
import ContextProvider from './Service/context/ContextProvider';

dotenv.config();

let root = document.getElementById("root")

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>
    , root);