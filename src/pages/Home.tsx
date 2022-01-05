import { Container, Grid, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined'
import MessageIcon from '@material-ui/icons/EmailOutlined'
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined'
import ListIcon from '@material-ui/icons/ListAltOutlined'
import UserIcon from '@material-ui/icons/PermIdentityOutlined'
import { makeStyles } from '@material-ui/styles'

const useHomeStyles = makeStyles(() => ({
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
    }
}))

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
                <Grid item xs={6}></Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </Container>
    )
}
