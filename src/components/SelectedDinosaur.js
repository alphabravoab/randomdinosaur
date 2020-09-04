import React, {useState, useEffect} from 'react'
import DinoCard from './DinoCard'
import { useParams } from 'react-router-dom'
import { http_get } from '../Service/HttpClient'

const SelectedDinosaur = () => {
    const { dinoId } = useParams()
    const [isLoaded, setIsLoaded] = useState(false);
    const [dino, setDino] = useState(null) 
    useEffect( () => { 
       async function getDino (){
        const dino = await http_get(dinoId)
        console.log(dino.data)
        setDino(dino.data)
        setIsLoaded(true)
       }
       getDino()     
    },[])   
    return isLoaded && <DinoCard dino={dino} />
}

export default SelectedDinosaur
