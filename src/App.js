import React from "react"
import {
    BrowserRouter,
    Switch,
    Route
 } from 'react-router-dom'
import SelectedDinosaur from "./components/SelectedDinosaur"
import GetRandomDinosaur from "./components/GetRandomDinosaur"
import Banner from './components/Banner'
import './app.css'

const App = () => {
    return (
        <BrowserRouter>
            <div className="main">
                <Switch>
                    <Route path="/:dinoId">
                        <Banner />
                            <SelectedDinosaur /> 
                        <Banner />
                    </Route>
                    <Route path="/"> 
                        <Banner />
                            <GetRandomDinosaur />
                        <Banner />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App