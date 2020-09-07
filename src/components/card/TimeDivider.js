import React, {useState, useEffect} from 'react'
import './card.css'

const TimeDivider =({era, lived}) => {
    const [partEra, setDinoPartEra]=useState("")
    const [eraDino, setDinoEra] = useState(false)
    useEffect(()=>{
    if(lived != "loading")
    {
        setDinoPartEra(lived.split(' ')[0])
         const eraDino = lived.split(' ')[1]
         setDinoEra(era == eraDino)
         console.log(eraDino, partEra, era)

    }},[lived])
    console.log(partEra, eraDino)
    
    return(
        <div className="era">
            <div>{era}</div>
            <div className="earlyMidLate">
                <div className="eraDivider">{partEra == "Early" && eraDino && "Early"}</div>
                <div className="eraDivider">{partEra == "Mid" && eraDino && "Mid"}</div>
                <div className="eraDivider">{partEra == "Late" && eraDino && "Late"}</div>
            </div>
        </div>
    )
}

export default TimeDivider
