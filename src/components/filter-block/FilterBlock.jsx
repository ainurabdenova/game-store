import React from 'react'
import { useDispatch } from "react-redux"
import { setGames } from "../../store/slice/catalogPageState"
import { RatingFilterBtn } from '../rating-filter-button/RatingFilterBtn'
import { ImCheckboxChecked } from "react-icons/im"
import PriceFilter from "../price-filter-block/PriceFilter"
import "./FilterBlock.css"

export const FilterBlock = () => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(setGames())
    }
    return (
        <div className='filter-block-wrapper'>
            <button className='all-products-button' onClick={handleClick}>
                <div>ВСЕ ТОВАРЫ</div>
                <ImCheckboxChecked className='all-products-button-icons' />
            </button>
            <RatingFilterBtn />
            <PriceFilter />
        </div>
    )
}
