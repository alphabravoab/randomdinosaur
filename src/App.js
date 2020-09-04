import React from "react"
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useParams
 } from 'react-router-dom'
import SelectedDinosaur from "./components/SelectedDinoSaur"
import GetRandomDinosaur from "./components/GetRandomDinoSaur"


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/:dinoId">
                    <SelectedDinosaur /> 
                </Route>
                <Route path="/"> 
                    <GetRandomDinosaur />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App