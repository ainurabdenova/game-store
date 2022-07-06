import React from 'react'
import { useSelector } from "react-redux"
import { GameCover } from "../../components/game-cover/GameCover"
import { GameItemButton } from "../../components/game-item-button/GameItemButton"
import { RatingGame } from "../../components/raiting-games/Rating"

import "./GamePage.css"

export const GamePage = () => {
    const game = useSelector(state => state.gamePage.currentGame)
    console.log(game);
    if (!game) return null


    return (
        <div className='game-page'>
            <h1 className='game-page_title'>{game.title}</h1>
            <div className="game-page_content">
                <div className="game-page_left">
                    <iframe width="90%" height="400px" src={game.video} title="YouTube Video Player" frameBorder="0">

                    </iframe>
                </div>
                <div className="game-page_right">
                    <GameCover image={game.image} />
                    <p>{game.description}</p>
                    <div className='secondary-text'>

                        <div>РЕЙТИНГ:</div>
                        <div>
                            <RatingGame rating={game.rating} />
                        </div>
                    </div>

                    <div className="game-page_buy-game">
                        <GameItemButton game={game} />
                    </div>
                </div>
            </div>
        </div>
    )
}
