import React from 'react'
import TimeDivider from './TimeDivider'
import './card.css'

const Lived = ({ from, to, era }) => {
    return (
    <div> 
        Lived from {from} million years ago to {to} million years ago
        <div class="slider"></div>
        <div className="eras">
            <TimeDivider era="Triassic" lived={era} />
            <TimeDivider era="Jurrasic" lived={era} />
            <TimeDivider era="Cretaceous" lived={era} />
            <div></div>
        </div>
    </div>
    )
}

export default Lived
