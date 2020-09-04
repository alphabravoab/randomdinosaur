import React from 'react'
import PropTypes from 'prop-types'
import './DinoCard.css'
import Title from './card/Title'
import Length from './card/Length'
import Lived from './card/Lived'
import Location from './card/Location'

const DinoCard = ({ dino }) => {
    document.title = `${document.title}: ${dino.name}`
    const {name, diet, era, found, image, length, livedFrom, livedTo, meaning, pronunciation, type, weight} = dino
    return <div className="dinoCard">
            <div>
                <Title name={name} pronunciation={pronunciation} meaning={meaning} />
                <Length length={length} />
                <Lived from={livedFrom} to={livedTo} />
                <Location found={found} />
            </div> 
            <div className="imageContainer"><img className="image" src={dino.image} alt={dino.name} /></div>
            
        </div>
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

export default DinoCard
