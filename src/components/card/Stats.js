import React, { useContext } from 'react'
import AppContext from '../../Service/context'

const Stats = () => {
    const { dino } = useContext(AppContext)
    const { length, weight, diet, type } = dino
    return (
        <div> 
            {length != 0 && <div>Length: {length}</div> }
            {weight != 0 && <div> Weight: {weight}</div> }
            {diet && <div>Diet: {diet} </div>}
            {type && <div>Genus: {type}</div>}
        </div>
        )
}

export default Stats
