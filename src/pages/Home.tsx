import { Container, Grid, IconButton, InputBase, Paper, Theme, Typography } from '@material-ui/core'
import React from 'react'


import { createStyles, makeStyles, withStyles } from '@material-ui/styles'
import { grey } from '@material-ui/core/colors'
import { Tweet } from '../components/Tweet'
import { SideMenu } from '../components/SideMenu'

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
        width: 230,
    },
    sideMenuListItem: {
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29,161,242,0.1 )',
                '& h6': {
                    color: theme.palette.primary.main
                },
                '& svg path': {
                    fill: theme.palette.primary.main
                },
            }
        },
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',

            padding: '0 25px 0 20px',
            marginBottom: 15,
            borderRadius: 30,
            height: 50,
            cursor: 'pointer',
            transition: 'background-color 0.1s ease-in-out'
        }
    },
    sideMenuTweetButton: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(3)
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 32,
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
                    <SideMenu classes={classes} />
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
