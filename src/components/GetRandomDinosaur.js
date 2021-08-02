import React, { useState, useEffect, useContext } from 'react';
import DinoCard from './DinoCard';
import { http_get } from '../Service/HttpClient';
import AppContext from '../Service/context';

const GetRandomDinosaur = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const { dino, setDino } = useContext(AppContext);
    useEffect( () => { 
       async function getDino () {
        const dino = await http_get("random");
        // console.log(dino.data)
        setDino(dino.data);
        setIsLoaded(true);
       }
       getDino();     
    },[]);   
    return <>
        {isLoaded && <DinoCard />}
        {!isLoaded && <DinoCard />}
    </>;
};

export default GetRandomDinosaur;
