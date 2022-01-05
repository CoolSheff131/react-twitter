import { Container, Grid, IconButton, InputBase, Paper, Theme, Typography } from '@material-ui/core'
import React from 'react'

import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined'
import MessageIcon from '@material-ui/icons/EmailOutlined'
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined'
import ListIcon from '@material-ui/icons/ListAltOutlined'
import UserIcon from '@material-ui/icons/PermIdentityOutlined'
import { createStyles, makeStyles, withStyles } from '@material-ui/styles'
import { grey } from '@material-ui/core/colors'
import { Tweet } from '../components/Tweet'

export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh'
    },
    logo: {
        margin: '15px 0'
    },
    logoIcon: {
        fontSize: 36,
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    sideMenuListItem: {
        display: 'flex',
        alignItems: 'center'
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 28,
    },
    tweet: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)'
        }
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: 0,
        borderBottom: 0,
    },
    tweetsHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,
        }
    },
    tweetAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5)
    },
    tweetFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        left: -13,
        width: 450,
    },
    tweetsUserName: {
        color: grey[500]
    }
}))

const SearchTextField = withStyles(() =>
    createStyles({
        input: {
            borderRadius: 30,
            backgroundColor: '#e6ecf0',
            height: 45,
            padding: 0,
        }
    }
    )
)(InputBase)

export const Home = () => {
    const classes = useHomeStyles();
    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <ul className={classes.sideMenuList}>
                        <li className={classes.sideMenuListItem}>
                            <IconButton className={classes.logo} aria-label="delete" color="primary">
                                <TwitterIcon color="primary" className={classes.logoIcon} />
                            </IconButton>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete" >
                                <SearchIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography variant="h6" className={classes.sideMenuListItemLabel} >Поиск</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete" >
                                <NotificationIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography variant="h6" className={classes.sideMenuListItemLabel} >Уведомления</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete" >
                                <MessageIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography variant="h6" className={classes.sideMenuListItemLabel}>Сообщения</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete" >
                                <BookmarkIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography variant="h6" className={classes.sideMenuListItemLabel}>Закладки</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete" >
                                <ListIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography variant="h6" className={classes.sideMenuListItemLabel}>Список</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete" >
                                <UserIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography variant="h6" className={classes.sideMenuListItemLabel}>Профиль</Typography>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} variant='outlined'>
                        <Paper className={classes.tweetsHeader} variant='outlined'>
                            <Typography variant='h6'>Главная</Typography>
                        </Paper>
                        <Tweet text='Жарю пельмени'
                            user={{
                                fullname: 'Alina Rebzon',
                                username: 'Rebzon',
                                avatarUrl: 'https://sun9-74.userapi.com/impg/gmdJPjBAe2xQWQMW9c2Lr4nHDlSUkR0_NkWkuw/_7QkDKCtiCs.jpg?size=1600x1600&quality=95&sign=0be456bfbdcb645ed228697ce9c8204a&type=album'
                            }}
                            classes={classes} />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <SearchTextField placeholder="Поиск в Твиттере" fullWidth />
                </Grid>
            </Grid>
        </Container>
    )
}
