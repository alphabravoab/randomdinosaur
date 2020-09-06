import React from 'react'

const Length = ({ length, weight, diet, type }) => {
    return (
        <div> 
            {length != 0 && <div>Length: {length}</div> }
            {weight != 0 && <div> Weight: {weight}</div> }
            {diet && <div>Diet: {diet} </div>}
            {type && <div>Genus: {type}</div>}
        </div>
        )
}

export default Length
