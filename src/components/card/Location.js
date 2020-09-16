import React, { useContext } from 'react'
import AppContext from '../../Service/context'

const Location = () => {
    const { dino } = useContext(AppContext)
    const { found } = dino
    return <div> Found in: {found} </div>
}

export default Location
