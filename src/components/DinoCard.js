import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Title from './card/Title'
import Stats from './card/Stats'
import Lived from './card/Lived'
import Location from './card/Location'
import AppContext from '../Service/context'
import './DinoCard.css'
import Tile from './neuMorph/Tile'

const DinoCard = () => {
    const { dino } = useContext(AppContext)
    if(!dino.loading) {
        document.title = `${document.title}: ${dino.name}`
        
    }
    const { name, image } = dino
    const newDino= () => {
        window.location.reload();
    }
    
    return (
        <Tile inlay={false}>
            {!dino.loading &&
            <div>
            <div className="imageContainer phone"><img className="image" src={image} alt={name} /></div>    
                <Title />
                <div className="line" />
                <Stats />
                <Lived />
                <Location />
                <button className="button" onClick={newDino}>Get new dinosaur</button>               
            </div> }
            {!dino.loading &&<div className="imageContainer desktop"><img className="image" src={image} alt={dino.name} /></div>   }
        </Tile>
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
