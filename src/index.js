import React from 'react';
import ReactDOM from "react-dom"
import App from './App'

import dotenv from "dotenv"

dotenv.config();

let root = document.getElementById("root")

ReactDOM.render(<App />, root);