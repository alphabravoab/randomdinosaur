import React, { useState, useEffect} from 'react'
import DinoCard from './DinoCard'
import { http_get } from '../Service/HttpClient'

const GetRandomDinosaur = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [dino, setDino] = useState({}) 
    useEffect( () => { 
       async function getDino (){
        const dino = await http_get("random")
        console.log(dino.data)
        setDino(dino.data)
        setIsLoaded(true)
       }
       getDino()     
    },[])   
    return <div>
        {isLoaded && <DinoCard dino={dino} />}
        {!isLoaded && <DinoCard />}
    </div>
}

export default GetRandomDinosaur
