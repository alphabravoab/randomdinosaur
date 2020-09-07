import React, {useState, useEffect} from 'react'
import TimeDivider from './TimeDivider'
import triassic from '../../images/Triassic.jpg'
import jurrasic from '../../images/Jurassic.jpg'
import cretaceous from '../../images/Cretaceous.jpg'
import './card.css'



const Lived = ({ from, to, era }) => {
    const [eraDino, setDinoEra] = useState("false")
    useEffect(()=>{
    if(era != "loading")
    {
        setDinoEra(era.split(' ')[1])
    }},[era])
    return (
    <div> 
        <div className="eras">
            <TimeDivider era="Triassic" lived={era} />
            <TimeDivider era="Jurassic" lived={era} />
            <TimeDivider era="Cretaceous" lived={era} />
            <div>Lived from {from} million years ago to {to} million years ago</div>
            {eraDino ==="Triassic" && <img src={triassic} alt="trias" className="eraPicture" />}
            {eraDino ==="Jurassic" && <img src={jurrasic} alt="jurrasic" className="eraPicture" />}
            {eraDino ==="Cretaceous" && <img src={cretaceous} alt="cretaceous" className="eraPicture" />}
        </div>
    </div>
    )
}

export default Lived
