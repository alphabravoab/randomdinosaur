import React, { useContext } from 'react'
import AppContext from '../../Service/context'
import "./card.css"

const Title = () => {
    const { dino } = useContext(AppContext)
    const { name, pronunciation, meaning} = dino
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    return (
        <div className="head"> 
            <h1>Name: {capitalizeFirstLetter(name)} </h1>
            <div>pronunciation: {pronunciation}</div>
            <div>Meaning: {meaning}</div>
        </div>
    )
}

export default Title
