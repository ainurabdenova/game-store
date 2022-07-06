import React from 'react'
import { useDispatch } from "react-redux"
import { useNavigate, useLocation } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/slice/userSlice"
import { FormSignIn } from "../form-sign-in/FormSignIn"


export const Signin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const fromPage = location.state?.from?.pathname || "/"


    const handleLogin = (email, password) => {

        const auth = getAuth()

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {

                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                navigate(fromPage, { replace: true })
            })
            .catch(() => alert("invalid user"))
    }
    return (
        <div>
            <FormSignIn
                handleClick={handleLogin}
            />
        </div>
    )
}
