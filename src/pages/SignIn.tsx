import { Button, makeStyles, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import ModeCommentOutlined from '@material-ui/icons/ModeCommentOutlined'
import React from 'react'
import { MessageOutlined } from '@material-ui/icons'


const useStyle = makeStyles((theme) => ({
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
    const classes = useStyle();

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
                    <Button variant='outlined' color="primary" fullWidth>Войти</Button>
                </div>
            </section>
        </div>
    )
}

export default SignIn
