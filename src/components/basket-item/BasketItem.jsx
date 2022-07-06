import React from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { GameCover } from "../game-cover/GameCover"
import { MdDeleteForever } from 'react-icons/md'
import { deleteItemFromBasket } from "../../store/slice/basket"
import { setCurrentGame } from "../../store/slice/games"
import "./BasketItem.css"

export const BasketItem = ({ game }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick = (e) => {
        e.stopPropagation()
        dispatch(deleteItemFromBasket(game.id))
    }
    const handleClicktwo = () => {
        dispatch(setCurrentGame(game))
        navigate(`/game/${game.title}`)
    }

    return (
        <div className='order-item' onClick={handleClicktwo}>
            <div className="order-item_cover">
                <GameCover image={game.image} />
            </div>
            <div className="order-item_title">
                <span>{game.title}</span>
            </div>
            <div className='order-item_price'>
                <span>{game.price} tg</span>

                <button className='basket-item-delete-button' onClick={handleClick} >УДАЛИТЬ <MdDeleteForever
                    className='basket-item_delete-icon'
                    size={15}
                /></button>
            </div>
        </div>
    )
}
