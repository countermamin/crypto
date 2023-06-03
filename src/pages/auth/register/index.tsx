import React from 'react';
import {TextField, Typography} from "@mui/material";
import {IPropsRegister} from "../../../common/types/auth";
import {useStyles} from "../styles";
import AppButton from "../../../components/app-button";

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    const {register, errors, navigate} = props;
    const classes = useStyles();

    return(
        <>
            <Typography variant="h2" textAlign='center'>Регистрация</Typography>
            <Typography variant="body1" marginBottom={3} textAlign='center'>Введите данные для регистрации</Typography>
            <TextField
                error={!!errors.firstName}
                fullWidth={true}
                margin='normal' label="Имя" variant="outlined"
                placeholder="Введите ваш имя"
                helperText={errors.firstName ? `${errors.firstName.message}` : ''}
                {...register('firstName')}
            />
            <TextField
                error={!!errors.username}
                fullWidth={true}
                margin='normal' label="Username"
                variant="outlined" placeholder="Введите ваш username"
                helperText={errors.username ? `${errors.username.message}` : ''}
                {...register('username')}
            />
            <TextField
                error={!!errors.email}
                fullWidth={true}
                margin='normal' label="Email" variant="outlined"
                placeholder="Введите ваш email"
                helperText={errors.email ? `${errors.email.message}` : ''}
                {...register('email')}
            />
            <TextField
                error={!!errors.password}
                type='password'
                fullWidth={true} margin='normal' label="Password" variant="outlined"
                placeholder="Введите ваш пароль"
                helperText={errors.password ? `${errors.password.message}` : ''}
                {...register('password')}
            />
            <TextField
                error={!!errors.confirmPassword}
                type='password'
                fullWidth={true} margin='normal' label="Password" variant="outlined"
                placeholder="Повторите ваш пароль"
                helperText={errors.confirmPassword ? `${errors.confirmPassword.message}` : ''}
                {...register('confirmPassword')}
            />
            <AppButton type='submit' variant="contained">Регистрация</AppButton>
            <Typography variant="body1">
                У вас уже есть аккаунт?
                <span onClick={() => navigate('/login')} className={classes.insideText}>
                    Войти
                </span>
            </Typography>
        </>
    );
};

export default RegisterPage;
