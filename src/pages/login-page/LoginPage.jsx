import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Signin } from '../../components/sigin-in/Signin'
import { useDispatch } from "react-redux"
import { useAuth } from "../../hook/use-auth"
import { removeUser } from "../../store/slice/userSlice"
import "./LoginPage.css"

export const LoginPage = () => {
    const dispatch = useDispatch()
    const { isAuth } = useAuth()

    return (
        <div className='sign-in-wrapper'>
            {isAuth ?
                <div >
                    <h1>ВЫ  УЖЕ В СИСТЕМЕ</h1>
                    <div className='div-div'>
                        <button onClick={() => dispatch(removeUser())} className="button-signin-login">LOGOUT</button>
                    </div>
                </div> : <div>
                    <Signin />
                    <p>
                        Регистрация <Link to="/register" className='text-sign-in-link'>SIGN UP</Link>
                    </p>
                </div>
            }





        </div>
    )
}
