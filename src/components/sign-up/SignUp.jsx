import React from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { FormSignUp } from "../form-sign-up/FormSignUp"
import { setUser } from "../../store/slice/userSlice"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = (email, password) => {
        const auth = getAuth()

        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {

                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                navigate("/")
            })
            .catch(console.error)
    }
    return (
        <div>
            <FormSignUp
                handleClick={handleRegister}

            />
        </div>
    )
}
