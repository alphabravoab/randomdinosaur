import React from 'react'
import './card.css'

const Lived = ({ from, to, era }) => {
    return (
    <div> 
        Lived from {from} million years ago to {to} million years ago in the {era} era
        <div className="eras">
            <div className="era">
                <div>Triasic</div>
                <div className="era">
                <div className="EarlyTriasic eraDivider" />
                <div className="eraDivider" />
                <div className="eraDivider" />
                </div>
            </div>
            <div className="era">
            <div>Jurrasic</div>
                <div className="earlyJurasic eraDivider" />
                <div className="midJurrasic eraDivider" />
                <div className="lateJurrasic eraDivider" />
            </div>
            <div className="cretaceous era">
            <div>Cretaceous </div>
                <div className="earlyCretaceous eraDivider"></div>
                <div className="midCretaceous eraDivider" />
                <div className="lateCretaceous eraDivider" />
            </div>
        </div>
    </div>
    )
}

export default Lived
