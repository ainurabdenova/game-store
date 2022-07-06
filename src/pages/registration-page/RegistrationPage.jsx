import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SignUp } from '../../components/sign-up/SignUp'
import { useAuth } from "../../hook/use-auth"
import { useDispatch } from "react-redux"
import { removeUser } from "../../store/slice/userSlice"
import "./RegistrationPage.css"

export const RegisterPage = () => {
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const { isAuth } = useAuth()

    console.log(isAuth);

    return (



        <div className='sign-up-wrapper'>
            {
                isAuth ?
                    <div>
                        <h1>ВЫ  УЖЕ В СИСТЕМЕ</h1>
                        <div className='div-ivd'>
                            <button onClick={() => dispatch(removeUser())} className="button-singout-register">LOGOUT</button>

                        </div>
                    </div> : <div>
                        <SignUp />

                        <p>
                            У Вас уже есть аккаунт? <Link to="/login" className='text-sign-up-link'>SIGN IN</Link>

                        </p>
                    </div>
            }
        </div>





    )
}
