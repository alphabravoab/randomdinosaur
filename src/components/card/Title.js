import React from 'react'

const Title = ({ name, pronunciation, meaning }) => {
    return (
        <div> 
            <h1>Name: {name} </h1>
            <div>pronunciation: {pronunciation}</div>
            <div>Meaning: {meaning}</div>
        </div>
    )
}

export default Title
