import { styled, TextField, FormControl, Button } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import * as React from 'react';


import { useForm } from "react-hook-form"
import { getInputState, required, validatePasswordSignIn } from '../../utils/utils'
import "./FormSignIn.css"

const Wrapper = styled("form")`
  width: 400px;
  height: auto;
  border: 1px solid #c1c2c3;
  padding: 0 1rem 1rem 1rem;
  border-radius: 4px;
  color:black;
  background-color:white;
 
`;

export const FormSignIn = ({ handleClick }) => {
    const { register, handleSubmit, formState } = useForm();
    const [values, setValues] = React.useState({
        password: false,

        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const onSubmit = async (value) => {
        handleClick(value.email, value.password)
    };

    return (
        <Wrapper onSubmit={handleSubmit(onSubmit)}>
            <h4>Авторизация</h4>

            <FormControl sx={{ width: "100%", mb: 1, }}>
                <TextField
                    label="e-mail"
                    variant="outlined"
                    type="email"
                    style={{ color: 'white' }}
                    {...register("email", { required: required() })}
                    {...getInputState(formState, "email")}
                />
            </FormControl>


            <FormControl sx={{ width: "100%", mb: 1 }} >

                <TextField
                    id="outlined-adornment-password"
                    type={values.password ? 'text' : 'password'}

                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.password ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Пороль"
                    {...register("password", {
                        required: required(),
                        validate: validatePasswordSignIn
                    })}
                    {...getInputState(formState, "password")}

                />
            </FormControl>

            <FormControl sx={{ width: "100%", mb: 1 }}>
                <Button type="submit" variant="contained" style={{ backgroundColor: "black" }}>
                    <span className='submit-sign-in_text'>Отправить</span>

                </Button>
            </FormControl>

        </Wrapper>
    );
}
