import React from "react"
import {
    BrowserRouter,
    Switch,
    Route
 } from 'react-router-dom'
import SelectedDinosaur from "./components/SelectedDinosaur"
import GetRandomDinosaur from "./components/SelectedDinosaur"
import Banner from './components/Banner'
import './app.css'

const App = () => {
    return (
        <BrowserRouter>
            <div className="main">
                <Banner />
                <Switch>
                    <Route path="/:dinoId">
                        <SelectedDinosaur /> 
                    </Route>
                    <Route path="/"> 
                        <GetRandomDinosaur />
                    </Route>
                </Switch>
                <Banner />
            </div>
        </BrowserRouter>
    )
}

export default App