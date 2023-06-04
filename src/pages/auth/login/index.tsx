import React from 'react';
import {TextField, Typography} from "@mui/material";
import {IPropsLogin} from "../../../common/types/auth";
import { useStyles } from '../styles';
import AppLoadingButton from "../../../components/loading-button";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const {navigate, register, loading, errors} = props;
    const classes = useStyles()

    return (
        <>
            <Typography variant="h2" textAlign='center' sx={{fontSize: 32}}>Авторизация</Typography>
            <Typography variant="body1" marginBottom={3} textAlign='center'>Введите ваш логин и пароль</Typography>
            <TextField
                error={!!errors.email}
                fullWidth={true}
                margin='normal'
                label="Email" variant="outlined"
                placeholder="Введите ваш email"
                helperText={errors.email ? `${errors.email.message}` : ''}
                {...register('email', )}
            />
            <TextField
                error={!!errors.password}
                type='password'
                fullWidth={true}
                margin='normal'
                label="Password" variant="outlined"
                placeholder="Введите ваш пароль"
                helperText={errors.password ? `${errors.password.message}` : ''}
                {...register('password')}
            />
            <AppLoadingButton loading={loading} type='submit'  variant="contained">Войти</AppLoadingButton>
            <Typography variant="body1">
                У вас нет аккаунта?
                <span onClick={() => navigate('/register')} className={classes.insideText}>
                    Регистрация
                </span>
            </Typography>
        </>
    );
};

export default LoginPage;
