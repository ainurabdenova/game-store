import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { enumerate, calcTotalPrice } from "../../utils/utils"
import { BasketItem } from "../basket-item/BasketItem"
import { deleteAllItem } from "../../store/slice/basket"
import "./Basket.css"

export const Basket = () => {

    const dispatch = useDispatch()
    const items = useSelector(state => state.basket.itemsInBasket)
    const [app, setApp] = useState(false)
    const handleClick = (e) => {
        e.stopPropagation()
        dispatch(deleteAllItem())
    }
    const handleClickTwo = (e) => {
        e.stopPropagation()

        dispatch(deleteAllItem())
        setApp(true)

    }

    if (items.length < 1) {
        return (<div>
            <div><h1 className='title-order-page'>Ваша корзина пуста...</h1> </div>
            {app && <div><h1 className='title-order-page'>Ваш заказ оформлено!!!</h1></div>}

        </div>
        )
    }
    return (
        <div className='basket-main-wrapper'>


            <div className="basket_main">
                <div className='basket-top-content'>
                    <div className='title-basket-page'>
                        {items.length} {enumerate(items.length, ['товар', 'товара', 'товаров'])} на сумму   {calcTotalPrice(items)} tg
                    </div>
                    <div className='basket-top-content-buttons'>
                        <button onClick={handleClick} className="buttons-in-basket">ОТЧИСТИТЬ КОРЗИНУ</button>
                        <button onClick={handleClickTwo} className="buttons-in-basket">ОФОРМИТЬ ЗАКАЗ</button>
                    </div>

                </div>

                <div className="basket-page_left">
                    {items.map(game => <BasketItem game={game} key={game.title} />)}
                </div>
            </div>
        </div>
    )
}
