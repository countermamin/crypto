import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsLogin} from "../../../common/types/auth";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const {setPassword, setEmail, navigate} = props;

    return (
        <>
            <Typography variant="h2" textAlign='center'>Авторизация</Typography>
            <Typography variant="body1" marginBottom={3} textAlign='center'>Введите ваш логин и пароль</Typography>
            <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder="Введите ваш email"
                       onChange={(e) => setEmail(e.target.value)}/>
            <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined"
                       placeholder="Введите ваш пароль" onChange={(e) => setPassword(e.target.value)}/>
            <Button type='submit' sx={{marginTop: 2, width: '60%', marginBottom: 2,}} variant="contained">Войти</Button>
            <Typography variant="body1" sx={{}}>У вас нет аккаунта? <span onClick={() => navigate('/register')}
                className='insideText'>Регистрация</span></Typography>
        </>
    );
};

export default LoginPage;
