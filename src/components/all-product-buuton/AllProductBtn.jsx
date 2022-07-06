import React from 'react'
import { useDispatch } from "react-redux"
import { setGames } from "../../store/slice/catalogPageState"

export const AllProductBtn = () => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(setGames())
    }
    return (
        <button className='all-products-button' onClick={handleClick}>ВСЕ ТОВАРЫ</button>
    )
}
