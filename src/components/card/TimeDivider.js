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
    }},[lived])
    console.log(partEra, lived)
    
    return(
        <div className="era">
            <div>{era}</div>
            <div className="earlyMidLate">
                <div className="eraDivider"><div>Early{partEra == "Early" && eraDino && <div className="liveHere" />}</div></div>
                <div className="eraDivider">Mid{partEra == "Mid" && eraDino && <div className="liveHere" />}</div>
                <div className="eraDivider">Late{partEra == "Late" && eraDino && <div className="liveHere" />}</div>
            </div>
        </div>
    )
}

export default TimeDivider
