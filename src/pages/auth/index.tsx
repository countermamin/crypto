import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import {Box} from "@mui/material";
import {instance} from "../../utils/axios";
import {useAppDispatch} from "../../utils/hook";
import {login} from "../../store/slice/auth";
import {AppErrors} from "../../common/errors";
import {useForm} from "react-hook-form";
import {LoginSchema, RegisterSchema} from "../../utils/yup";
import { yupResolver } from '@hookform/resolvers/yup';
import {useStyles} from "./styles";

const AuthRootComponent: React.FC = (): JSX.Element => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const classes = useStyles()
    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
    } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(location.pathname === '/login' ? LoginSchema : RegisterSchema)
    });

    const handleSubmitForm = async (data: any) => {
        if (location.pathname === '/login') {
            try {
                const userData = {
                    email: data.email,
                    password: data.password,
                }
                const user  = await instance.post('auth/login', userData);
                await dispatch(login(user.data));
                navigate('/');
            } catch (e) {
                return e;
            }
        } else if (location.pathname === '/register') {
            if (data.password === data.confirmPassword) {
                try {
                    const userData = {
                        email: data.email,
                        password: data.password,
                        firstName: data.firstName,
                        username: data.username,
                    }
                    const newUser  = await instance.post('auth/register', userData);
                    await dispatch(login(newUser.data));
                    navigate('/');
                } catch (e) {
                    console.log(e)
                    return e;
                }
            } else {
                throw new Error(AppErrors.PasswordDoNotMatch);
            }

        }
    }

    // @ts-ignore
    return (
        <div className={classes.root}>
            <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth={640}
                    margin='auto'
                    padding={5}
                    borderRadius={5}
                    boxShadow={'-3px -2px 20px 1px #202020'}

                >
                    {location.pathname === '/login'
                            ? <LoginPage
                                navigate={navigate}
                                register={register}
                                errors={errors}
                              />
                            : location.pathname === '/register'
                            ? <RegisterPage
                                navigate={navigate}
                                register={register}
                                errors={errors}
                            />
                            : null
                    }
                </Box>
            </form>
        </div>
    )
};

export default AuthRootComponent;
