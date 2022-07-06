import React from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { GameCover } from '../game-cover/GameCover';
import { GameGenre } from '../game-genre/GameGenre';
import { RatingGame } from "../raiting-games/Rating"
import { GameItemButton } from "../game-item-button/GameItemButton"
import { setCurrentGame } from "../../store/slice/games"
import "./GameItem.css"

export const GameItem = ({ games }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {

        dispatch(setCurrentGame(games))
        navigate(`/game/${games.title}`)
    }

    return (
        <div className='game-item-wrapper' onClick={handleClick}>
            <GameCover image={games.image} />
            <div className='game-item-title'>{games.title}</div>
            <div className='game-rating'>
                <div className='game-rating-text'>RATING:</div>
                <RatingGame rating={games.rating} />
                <span className='game-rating-text-number'>{games.rating}</span>
            </div>
            <div className="game-genre-wrapper">
                <GameGenre genre={games.genres} />
            </div>
            <div className='price-and-button'>
                <div className='price'>ЦЕНА: {games.price}</div>
                <div >

                </div>
                <GameItemButton game={games} />
            </div>
        </div>
    )
}
