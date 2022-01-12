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
import { fetchSignIn } from '../../../store/ducks/user/contracts/actionCreator'
import { selectUserStatus } from '../../../store/ducks/user/selectors'
import { LoadingState } from '../../../store/types'

const LoginFormSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Введите почту'),
    password: yup.string().min(6, 'Минимальная длина пароля 6 символов').required()
})


interface LoginModalProps {
    open: boolean;
    onClose: () => void;
}

export interface LoginFormProps {
    email: string;
    password: string;
}

export const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }): React.ReactElement => {
    const classes = useStyleSignIn()
    const { control, formState: { errors }, handleSubmit } = useForm<LoginFormProps>({
        resolver: yupResolver(LoginFormSchema)
    })
    const dispatch = useDispatch()
    const loadingStatus = useSelector(selectUserStatus)
    const openNotificationRef = React.useRef<(text: string, type: Color) => void>(() => { })
    const onSubmit = async (data: LoginFormProps) => {
        dispatch(fetchSignIn(data))
    }

    React.useEffect(() => {
        if (loadingStatus === LoadingState.SUCCESS) {
            openNotificationRef.current('Авторизация прошла успешна', 'success')
        } else if (loadingStatus === LoadingState.ERROR) {
            openNotificationRef.current('Неверный логин или пароль', 'error')
        }
    })

    console.log(errors);


    return (
        <Notification>
            {callback => {
                openNotificationRef.current = callback
                return <ModalBlock visible={open} onClose={onClose} title="Войти в аккаунт" classes={classes}>
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
                                            error={!!errors.email}
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


                                <Button type="submit" variant='contained' color="primary" fullWidth>
                                    Войти
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </form>
                </ModalBlock>
            }
            }
        </Notification>


    )
}
