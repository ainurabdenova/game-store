import * as React from 'react';

import { styled, TextField, FormControl, Button } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import { useForm } from "react-hook-form"
import { getInputState, required, validatePassword, validateEmail } from '../../utils/utils'

const Wrapper = styled("form")`
  width: 400px;
  height: auto;
  border: 1px solid #c1c2c3;
  padding: 0 1rem 1rem 1rem;
  border-radius: 4px;
  color:black;
  background-color:white;
 
`;

export const FormSignUp = ({ handleClick }) => {
    const { register, handleSubmit, formState, getValues } = useForm();
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


    const onSubmit = async (value, e) => {
        e.preventDefault()
        handleClick(value.email, value.password)
    };
    const handleClickEvenet = (e) => {
        e.preventDefault();
    }



    return (
        <Wrapper onSubmit={handleSubmit(onSubmit)}>
            <h4>Регистрация</h4>

            <FormControl sx={{ width: "100%", mb: 1, }}>
                <TextField
                    label="e-mail"
                    variant="outlined"
                    type="email"
                    style={{ color: 'white' }}
                    onChange={handleClickEvenet}
                    {...register("email", { required: required(), validate: validateEmail })}
                    {...getInputState(formState, "email")}
                />
            </FormControl>

            {/* <FormControl sx={{ width: "100%", mb: 1 }}>
                <TextField
                    label="Пароль"
                    variant="outlined"
                    type="password"
                    {...register("password", {
                        required: required(),
                        validate: validatePassword
                    })}
                    {...getInputState(formState, "password")}
                />
            </FormControl> */}
            <FormControl sx={{ width: "100%", mb: 1 }} >
                {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
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
                        validate: validatePassword
                    })}
                    {...getInputState(formState, "password")}

                />
            </FormControl>

            <FormControl sx={{ width: "100%", mb: 1 }} >
                {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                <TextField
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}

                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Повторите пороль"
                    {...register("cPassword", {
                        required: required(),
                        // validate: validateCPassword,
                        validate: (value) => getValues("password") === value || "Пароли не совпадают"
                    })}
                    {...getInputState(formState, "cPassword")}

                />
            </FormControl>


            <FormControl sx={{ width: "100%", mb: 1 }}>
                <Button type="submit" variant="contained" style={{ backgroundColor: "black" }}>
                    <span className='submit-sign-up_text'>Регистрация</span>

                </Button>
            </FormControl>

        </Wrapper>
    );
}
