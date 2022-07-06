import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { SiUbisoft } from "react-icons/si"
import { AiFillShopping } from "react-icons/ai"
import { RiHome5Fill, RiLoginCircleFill, RiLogoutCircleFill } from "react-icons/ri"
import { BsBasket2Fill } from "react-icons/bs"
import { setHamburgerMenu, setSearchInputClose } from "../../store/slice/openCloseHeaderElem"
import { removeUser } from "../../store/slice/userSlice"
import { Search } from "../search/Search"
import "./Header.css"
import { useAuth } from '../../hook/use-auth'

export const Header = () => {

    const dispatch = useDispatch()
    const { isAuth } = useAuth()
    const hamburgerMenuState = useSelector(state => state.openClose.hamburgerMenu)

    const handleClick = () => {
        console.log(hamburgerMenuState);
        dispatch(setHamburgerMenu(), setSearchInputClose())

    }

    const handelClickTwo = (e) => {
        e.stopPropagation()
        dispatch(removeUser())
    }

    return (
        <div className='header_wrapper'>

            <div className={hamburgerMenuState ? "header_menu_hamburger active" : "header_menu_hamburger"} onClick={handleClick}>
                <span className='header_menu_hamburger_item'></span>
                <span className='header_menu_hamburger_item'></span>
                <span className='header_menu_hamburger_item'></span>
            </div>

            <div className="header_logo_wrapper">
                <Link to="/">
                    <SiUbisoft style={{ color: "red" }} size={40} />

                </Link>
            </div>


            <ul className={hamburgerMenuState ? "header_nav_menu active" : "header_nav_menu"} >
                <li className='header_nav_menu_item'>
                    <Link to="/" className='header_nav_menu_item_link'>
                        <div>HOME</div>
                        <div><RiHome5Fill /></div>
                    </Link>
                </li>
                <li className='header_nav_menu_item'>
                    <Link to="/catalog" className='header_nav_menu_item_link'>
                        <div>CATALOG</div>
                        <div><AiFillShopping /></div>

                    </Link>
                </li>
                <li className='header_nav_menu_item'>
                    <Link to="/basket" className='header_nav_menu_item_link'>
                        <div>BASKET</div>
                        <BsBasket2Fill />
                    </Link>
                </li>
                <li className='header_nav_menu_item'>


                    {isAuth ? <>
                        <Link to="/" className='header_nav_menu_item_link'> <div onClick={handelClickTwo}>LOGOUT</div>
                            <RiLogoutCircleFill /></Link>

                    </> :

                        <Link to="/login" className='header_nav_menu_item_link'>

                            <div>LOGIN</div>
                            <RiLoginCircleFill />
                        </Link>

                    }


                </li>


            </ul>


            <Search />


        </div>
    )
}
