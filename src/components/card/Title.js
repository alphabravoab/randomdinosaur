import React from 'react'
import "./card.css"

const Title = ({ name, pronunciation, meaning }) => {
    return (
        <div className="head"> 
            <h1>Name: {name} </h1>
            <div>pronunciation: {pronunciation}</div>
            <div>Meaning: {meaning}</div>
        </div>
    )
}

export default Title
