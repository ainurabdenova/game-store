import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { setGames, setRatingGames } from "../../store/slice/catalogPageState"
import { FaStarHalfAlt } from "react-icons/fa"
import "./RatingFilterBtn.css"

export const RatingFilterBtn = () => {
    const dispatch = useDispatch()
    const ratingFilter = useSelector(state => state.games.games)
    const handleClick = () => {
        dispatch(setRatingGames())
        console.log(ratingFilter);
    }
    return (
        <div className='rating-filter-products'>
            <button className='rating-filter-button' onClick={handleClick}>

                <div >ПО РЕЙТИНГУ</div>
                <FaStarHalfAlt className='rating-filter-button-icons' />
            </button>
        </div>
    )
}
