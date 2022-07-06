import React from 'react'
import { Link } from 'react-router-dom'
import "./NotFoundPage.css"

export const NotFoundPage = () => {
    return (
        <div className='not-found-page'>
            <h2>Такой страницы не существует...</h2>
            <h1>404</h1>
            <Link to={"/"}>
                <button className='neon-button'>Главная страница</button>
            </Link>
        </div>
    )
}
