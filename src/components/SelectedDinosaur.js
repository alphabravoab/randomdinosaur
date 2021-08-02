import React, {useState, useEffect} from 'react';
import DinoCard from './DinoCard';
import { useParams } from 'react-router-dom';
import { http_get } from '../Service/HttpClient';

const SelectedDinosaur = () => {
    const { dinoId } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);
    const [dino, setDino] = useState(null); 
    useEffect( () => { 
       async function getDino (){
        try{
            const dino = await http_get(dinoId.toLowerCase());
            console.log(dino.data);
            if(dino.data){
                setDino(dino.data);
                setIsLoaded(true);
            }
       } catch (e) {
           setError(true);
       }
       
    }
    getDino();     
    },[]);   
    return (
    <> 
    {isLoaded && <DinoCard dino={dino} />}
    {!isLoaded && <DinoCard />}
    {error && <div className="dinoCard"><h1>Error dinosaur not found</h1></div>}
    </>
    );
};

export default SelectedDinosaur;
