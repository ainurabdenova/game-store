import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setSearchInput } from "../../store/slice/openCloseHeaderElem"
import { FaSearch } from "react-icons/fa"
import { setFilterDataDelete, setFilterDataSearch, setInputText, setInputTextDelete } from "../../store/slice/searchFilter"
import { setCurrentGame } from "../../store/slice/games"
import "./Search.css"

export const Search = () => {
    const dispatch = useDispatch()
    const openClose = useSelector(state => state.openClose.searchInput)
    const navigate = useNavigate()

    const text = useSelector(state => state.search.textEntered)
    const searchResult = useSelector(state => state.search.filterDataSearch)
    // console.log(text);
    // console.log(searchResult);

    const handleFilter = (event) => {
        dispatch(setInputText(event.target.value))

        if (text === "") {
            dispatch(setFilterDataDelete())

        } else {
            dispatch(setFilterDataSearch(text))
        }
    };


    const handleClickTwo = (e) => {
        e.stopPropagation()
        dispatch(setSearchInput())

    }

    const handleClick = (e, value) => {
        e.stopPropagation();
        dispatch(setCurrentGame(value))
        dispatch(setFilterDataDelete())
        dispatch(setInputTextDelete())
        navigate(`/game/${value.title}`)
    }
    return (
        <div className={openClose ? "search-box active" : "search-box"} >
            <input
                type="text"
                placeholder='Поиск...'
                className='search-txt'
                value={text}
                onChange={handleFilter} />
            <div className='search-btn' onClick={handleClickTwo}>
                <FaSearch style={{ color: "red", zIndex: "2" }} />
            </div>
            {searchResult.length != 0 && (
                <div className="dataResult">
                    {searchResult.slice(0, 15).map((value) => {
                        return (
                            <div className="dataItem" to={`/game/${value.title}`} key={value.id} onClick={(e) => handleClick(e, value)}>
                                <p>{value.title} </p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    )
}
