import { FormControl, FormGroup, TextField, Button } from '@material-ui/core'
import React from 'react'
import { useStyleSignIn } from '..'
import ModalBlock from '../../../components/ModalBlock'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { Controller, useForm } from 'react-hook-form'

const LoginFormSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Введите почту'),
    password: yup.string().min(6, 'Минимальная длина пароля 6 символов').required()
})


interface LoginModalProps {
    open: boolean;
    onClose: () => void;
}

interface LoginFormProps {
    email: string;
    password: string;
}

export const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }): React.ReactElement => {
    const classes = useStyleSignIn()
    const { control, formState: { errors }, handleSubmit } = useForm<LoginFormProps>({
        resolver: yupResolver(LoginFormSchema)
    })
    const onSubmit = (data: LoginFormProps) => console.log(data);
    console.log(errors);


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
    )
}
