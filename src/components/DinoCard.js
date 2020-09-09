import React from 'react'
import PropTypes from 'prop-types'
import Title from './card/Title'
import Stats from './card/Stats'
import Lived from './card/Lived'
import Location from './card/Location'
import './DinoCard.css'

const DinoCard = ({ dino }) => {
    document.title = `${document.title}: ${dino.name}`
    const {name, diet, era, found, image, length, livedFrom, livedTo, meaning, pronunciation, type, weight} = dino
    const newDino= () => {
        window.location.reload();
    }
    
    return (
        <div className="dinoCard">
            <div>
            <div className="imageContainer phone"><img className="image" src={image} alt={dino.name} /></div>    
                <Title name={name} pronunciation={pronunciation} meaning={meaning} />
                <div className="line" />
                <Stats length={length} weight={weight} diet={diet} type={type}/>
                <Lived from={livedFrom} to={livedTo} era={era} />
                <Location found={found} />
                <button className="button" onClick={newDino}>Get new dinosaur</button>               
            </div> 
            <div className="imageContainer desktop"><img className="image" src={image} alt={dino.name} /></div>    
            
        </div>
        )
}

DinoCard.propTypes  = {
    dino: PropTypes.shape({
        name: PropTypes.string,
        diet: PropTypes.string,
        era: PropTypes.string,
        found: PropTypes.string,
        image: PropTypes.string,
        length: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
          ]),
        livedFrom: PropTypes.number,
        livedTo: PropTypes.number,
        meaning: PropTypes.string,
        name: PropTypes.string,
        pronunciation: PropTypes.string,
        type: PropTypes.string,
        weight: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
          ]),
    })
}

DinoCard.defaultProps ={
    dino: {
        name: "loading",
        diet: "loading",
        era: "loading",
        found: "loading",
        image: "loading",
        length: "loading",
        livedFrom: 0,
        livedTo: 0,
        meaning: "loading",
        name: "loading",
        pronunciation: "loading",
        type: "loading",
        weight: "loading"
    }
}

export default DinoCard
