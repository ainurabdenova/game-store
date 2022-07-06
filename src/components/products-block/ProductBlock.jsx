import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"
import { GameItem } from '../game-item/GameItem'
import { setPaginationPageNotes, setPaginationNum } from "../../store/slice/catalogPageState"
import "./ProductBlock.css"

export const ProductBlock = ({ games }) => {
    const distpatch = useDispatch()
    const PageNotes = useSelector(state => state.games.paginationPage)
    const PaginationNum = useSelector(state => state.games.paginationNum)

    const notesOnPage = 6//сколько элемента будет отрисовано
    const countOfItems = Math.ceil(games.length / notesOnPage)//скаолько элеметов в пагинации
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(6)
    const [active, setActive] = useState(0)
    useEffect(() => {
        distpatch(setPaginationPageNotes(games.slice(0, 6)))

    }, [])

    useEffect(() => {
        setStart((PaginationNum) * notesOnPage);
        setEnd(start + notesOnPage);
        distpatch(setPaginationPageNotes(games.slice(start, end)))
        setActive(PaginationNum)

    }, [PaginationNum, start, end])

    let paginationLength = []
    for (let i = 0; i < countOfItems; i++) {
        paginationLength.push(i)
    }

    const handleLeftButtonClick = () => {
        if (PaginationNum > 0) {
            distpatch(setPaginationNum(PaginationNum - 1))
        }

    }

    const handleRightButtonClick = () => {
        if (PaginationNum < countOfItems - 1) {
            distpatch(setPaginationNum(PaginationNum + 1))

        }

    }
    const handleClick = (item) => {
        distpatch(setPaginationNum(item))

    }


    return (
        <div>
            <div className='pagination_wrapper'>
                <div>
                    <BsFillArrowLeftCircleFill className='arrow-icons-pagination' size={30} onClick={handleLeftButtonClick} />
                </div>
                <div className='pagination'>
                    {paginationLength.map((item, index) => (
                        <div key={index} className={(active == index) ? "pagination-item-count pagination-item-count_active" : "pagination-item-count "} onClick={() => handleClick(item)}>{item + 1}</div>

                    ))}
                </div>
                <div>
                    <BsFillArrowRightCircleFill size={30} className='arrow-icons-pagination' onClick={handleRightButtonClick} />
                </div>
            </div>
            <div className='product-block'>

                <>
                    {
                        (PageNotes || []).map(games => (
                            <GameItem games={games} key={games.id} />
                        ))
                    }
                </>



            </div>
        </div>

    )
}
