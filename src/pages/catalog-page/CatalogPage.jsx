import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { FilterBlock } from '../../components/filter-block/FilterBlock'
import { ProductBlock } from '../../components/products-block/ProductBlock'
import "./CatalogPage.css"

export const CatalogPage = () => {

    const games = useSelector(state => state.games.games)
    console.log(games);

    return (
        <div className='catalog_page_main_wrapper'>
            <div className='catalog_page_main'>
                <FilterBlock />
                <ProductBlock games={games} />
            </div>

        </div>
    )
}
