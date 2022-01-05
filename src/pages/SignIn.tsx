import { Button, FormControl, makeStyles, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import ModeCommentOutlined from '@material-ui/icons/ModeCommentOutlined'
import React from 'react'
import ModalBlock from '../components/ModalBlock'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'




export const useStyleSignIn = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: 'calc(100vh - 84px)',
    },
    blueSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#71c9F8',
        flex: '0 0 50%',
        overflow: 'hidden',
        position: 'relative',
    },
    blueSideBigIcon: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        width: '350%',
        height: '350%',
    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 20,
        }
    },
    blueSideListInfoIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    blueSideListInfoItem: {
        marginBottom: 40,
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',

    },
    loginSideTwitterIcon: {
        fontSize: 50
    },
    loginSideWrapper: {
        width: 380
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 45,
        marginTop: 20,
    },
    loginSideField: {
        marginBottom: 18
    }

    // button: {
    //     fontWeight: 700,
    // },
    // lightBulb: {
    //     verticalAlign: 'middle',
    //     marginRight: theme.spacing(1)
    // }
}))

function SignIn() {
    const classes = useStyleSignIn();
    const [visibleSignIn, setVisibleSignIn] = React.useState(false)
    const handleClickOpen = () => {
        setVisibleSignIn(true)
    }
    const handleClose = () => {
        setVisibleSignIn(false)
    }

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon color='primary' className={classes.blueSideBigIcon} />
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}><Typography variant='h6'><SearchIcon className={classes.blueSideListInfoIcon} /> Читайте о том, что вам интересно.</Typography></li>
                    <li className={classes.blueSideListInfoItem}><Typography variant='h6'><PeopleOutlineIcon className={classes.blueSideListInfoIcon} /> Узнайте, о чем говорят в мире.</Typography></li>
                    <li className={classes.blueSideListInfoItem}><Typography variant='h6'><ModeCommentOutlined className={classes.blueSideListInfoIcon} /> Присоединяйтесь к общению.</Typography></li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color='primary' className={classes.loginSideTwitterIcon} />
                    <Typography className={classes.loginSideTitle} variant='h4'>Узнайте, что происходит в мире прямо сейчас</Typography>
                    <Typography><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
                    <br></br>
                    <Button style={{ marginBottom: 20 }} variant='contained' color="primary" fullWidth>Зарегестрироваться</Button>
                    <Button onClick={handleClickOpen} variant='outlined' color="primary" fullWidth>Войти</Button>
                    <ModalBlock visible={visibleSignIn} onClose={handleClose} title="Войти в аккаунт" classes={classes}>
                        <FormControl component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField autoFocus
                                    className={classes.loginSideField}
                                    margin='dense'
                                    id='email'
                                    label="Email Address"
                                    InputLabelProps={{ shrink: true }}
                                    variant="filled"
                                    type="email"
                                    fullWidth />
                                <TextField autoFocus
                                    className={classes.loginSideField}
                                    margin='dense'
                                    id='password'
                                    label="Пароль"
                                    InputLabelProps={{ shrink: true }}
                                    variant="filled"
                                    type="password"
                                    fullWidth />
                                <Button onClick={handleClose} variant='contained' color="primary" fullWidth>
                                    Войти
                                </Button>
                                <br />
                                <br />
                                <br />
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>

                </div>
            </section>
        </div>
    )
}

export default SignIn
