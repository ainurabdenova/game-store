import React from 'react'
import "./GameGenre.css"

export const GameGenre = ({ genre }) => {
    return (
        <div className='game-genre'>
            {(genre || []).map((item, index) => (
                <div className='genre' key={index}>{item}</div>
            ))}
        </div>
    )
}
