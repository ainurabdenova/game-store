import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemFromBasket, setItemInBasket } from '../../store/slice/basket'
import "./GameItemButton.css"

export const GameItemButton = ({ game }) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.basket.itemsInBasket)
    const isItemInBasket = items.some(item => item.id === game.id);


    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInBasket) {
            dispatch(deleteItemFromBasket(game.id))
        } else {
            dispatch(setItemInBasket(game))
        }

    }
    return (
        <div className='game-buy'>
            <button onClick={handleClick} className="game-bay-button">

                {isItemInBasket ? "Убрать из корзины" : "В Корзину"}

            </button>

        </div>
    )
}
