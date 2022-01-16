import { FormControl, FormGroup, TextField, Button } from '@material-ui/core'
import React from 'react'
import { useStyleSignIn } from '..'
import ModalBlock from '../../../components/ModalBlock'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { Controller, useForm } from 'react-hook-form'
import { AuthApi } from '../../../services/api/authApi'
import { Notification } from '../../../components/Notification'
import { Color } from '@material-ui/lab'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSignIn, fetchSignUp } from '../../../store/ducks/user/contracts/actionCreator'
import { selectUserStatus } from '../../../store/ducks/user/selectors'
import { LoadingState } from '../../../store/types'

const RegisterFormSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Введите почту'),
    username: yup.string().required('Введите логин'),
    fullname: yup.string().required('Введите почту'),
    password: yup.string().min(6, 'Минимальная длина пароля 6 символов').required(),
    password2: yup.string().oneOf([yup.ref('password', undefined), 'Пароли должны совпадать']),
})


interface RegisterModalProps {
    open: boolean;
    onClose: () => void;
}

export interface RegisterFormProps {
    fullname: string;
    username: string;
    email: string;
    password: string;
    password2: string;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ open, onClose }): React.ReactElement => {
    const classes = useStyleSignIn()
    const { control, formState: { errors }, handleSubmit } = useForm<RegisterFormProps>({
        resolver: yupResolver(RegisterFormSchema)
    })
    const dispatch = useDispatch()
    const loadingStatus = useSelector(selectUserStatus)
    const openNotificationRef = React.useRef<(text: string, type: Color) => void>(() => { })
    const onSubmit = async (data: RegisterFormProps) => {
        dispatch(fetchSignUp(data))
    }

    React.useEffect(() => {
        if (loadingStatus === LoadingState.SUCCESS) {
            openNotificationRef.current('Регистрация прошла успешна', 'success')
        } else if (loadingStatus === LoadingState.ERROR) {
            openNotificationRef.current('Ошибка', 'error')
        }
    })


    return (
        <ModalBlock visible={open} onClose={onClose} title="Войти в аккаунт" classes={classes}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                    <FormGroup aria-label="position" row>
                        <Controller
                            name="email"
                            control={control}
                            render={({
                                field: { onChange, onBlur, value, name, ref },
                                fieldState: { invalid, isTouched, isDirty, error },
                                formState,
                            }) => (
                                <TextField autoFocus
                                    className={classes.loginSideField}
                                    margin='dense'

                                    label="Email Address"
                                    InputLabelProps={{ shrink: true }}
                                    variant="filled"
                                    type="email"
                                    fullWidth
                                    error={!!error}
                                    helperText={error?.message}
                                    onBlur={onBlur} // notify when input is touched
                                    onChange={onChange} // send value to hook form
                                    inputRef={ref}
                                />
                            )}
                        />
                        <Controller
                            name="username"
                            control={control}
                            render={({
                                field: { onChange, onBlur, value, name, ref },
                                fieldState: { invalid, isTouched, isDirty, error },
                                formState,
                            }) => (
                                <TextField autoFocus
                                    className={classes.loginSideField}
                                    margin='dense'

                                    label="Логин"
                                    InputLabelProps={{ shrink: true }}
                                    variant="filled"
                                    type="text"
                                    fullWidth
                                    error={!!error}
                                    helperText={error?.message}
                                    onBlur={onBlur} // notify when input is touched
                                    onChange={onChange} // send value to hook form
                                    inputRef={ref}
                                />
                            )}
                        />

                        <Controller
                            name="fullname"
                            control={control}
                            render={({
                                field: { onChange, onBlur, value, name, ref },
                                fieldState: { invalid, isTouched, isDirty, error },
                                formState,
                            }) => (
                                <TextField autoFocus
                                    className={classes.loginSideField}
                                    margin='dense'

                                    label="Имя"
                                    InputLabelProps={{ shrink: true }}
                                    variant="filled"
                                    type="text"
                                    fullWidth
                                    error={!!error}
                                    helperText={error?.message}
                                    onBlur={onBlur} // notify when input is touched
                                    onChange={onChange} // send value to hook form
                                    inputRef={ref}
                                />
                            )}
                        />

                        <Controller
                            name="password"
                            control={control}
                            render={({
                                field: { onChange, onBlur, value, name, ref },
                                fieldState: { invalid, isTouched, isDirty, error },
                                formState,
                            }) => (
                                <TextField autoFocus

                                    className={classes.loginSideField}
                                    margin='dense'
                                    label="Пароль"
                                    InputLabelProps={{ shrink: true }}
                                    variant="filled"
                                    type="password"
                                    error={!!error}
                                    helperText={error?.message}
                                    fullWidth
                                    onBlur={onBlur} // notify when input is touched
                                    onChange={onChange} // send value to hook form
                                    inputRef={ref}
                                />
                            )}
                        />
                        <Controller
                            name="password2"
                            control={control}
                            render={({
                                field: { onChange, onBlur, value, name, ref },
                                fieldState: { invalid, isTouched, isDirty, error },
                                formState,
                            }) => (
                                <TextField autoFocus

                                    className={classes.loginSideField}
                                    margin='dense'
                                    label="Подтвердите пароль"
                                    InputLabelProps={{ shrink: true }}
                                    variant="filled"
                                    type="password"
                                    error={!!error}
                                    helperText={error?.message}
                                    fullWidth
                                    onBlur={onBlur} // notify when input is touched
                                    onChange={onChange} // send value to hook form
                                    inputRef={ref}
                                />
                            )}
                        />


                        <Button disabled={loadingStatus === LoadingState.LOADING} type="submit" variant='contained' color="primary" fullWidth>
                            Регистрация
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </ModalBlock>


    )
}
