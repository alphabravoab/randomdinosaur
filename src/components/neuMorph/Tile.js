import React from 'react'
import PropTypes from 'prop-types'

const Tile = ({style, inlay, children}) => {
    return (
        <div style={
            !inlay && {boxShadow: ['3px 3px 5px  #adadad', '-3px -3px 5px #f7f7f7']} , 
            inlay && {boxShadow: ['-3px -3px 5px  #adadad', '3px 3px 5px #f7f7f7']} , 
            {
                background: 'rgb(232,232,232)',
                background: 'linear-gradient(133deg, rgba(232,232,232,1) 0%, rgba(218,218,218,1) 100%)',
                color: '#99928b',
                width: '75vw',
                marginTop: '10px',
                padding: '20px',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                boxShadow: ['3px 3px 5px  #adadad', '-3px -3px 5px #f7f7f7'],
                ...style
            }}>
            {children}
        </div>
    )
}

Tile.propTypes = {
    style: PropTypes.shape(),
    inlay: PropTypes.bool
}

Tile.defaultProps = {
    inlay: false
}

export default Tile