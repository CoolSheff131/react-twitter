import { Avatar, Button, Container, Divider, Grid, IconButton, InputAdornment, InputBase, List, ListItem, ListItemAvatar, ListItemText, Paper, TextField, Theme, Typography } from '@material-ui/core'
import React from 'react'


import { createStyles, makeStyles, withStyles } from '@material-ui/styles'
import { grey } from '@material-ui/core/colors'
import { Tweet } from '../components/Tweet'
import { SideMenu } from '../components/SideMenu'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import { TextareaAutosize, CircularProgress } from '@material-ui/core'
import { ImageOutlined as ImageOutlinedIcon, PersonAddOutlined, SentimentSatisfiedOutlined as EmojiIcon } from '@material-ui/icons'
import classNames from 'classnames'

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
        position: 'sticky',
        top: 0,
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
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0
    },
    rightSideBlock: {
        backgroundColor: '#f5f8fa',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,

        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
    },
    addForm: {
        padding: 20,
    },
    addFormBody: {
        display: 'flex',
        width: '100%',
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addFormActions: {
        margintTop: 10,
        paddingLeft: 70,
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#e6ecf0',
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        margin: '0 20px',
        '& .MuiCircularProgress-root': {
            position: 'absolute'
        },
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    }
}))

const SearchTextField = withStyles((theme: Theme) => ({
    root: {
        '& .MuiOutlinedInput-root': {
            borderRadius: 30,
            backgroundColor: '#e6ecf0',

            padding: 0,

            paddingLeft: 15,
            '&.Mui-focused': {
                backgroundColor: '#fff',
                '& fieldset': { borderWidth: 1, borderColor: theme.palette.primary.main },
                '& svg path': {
                    fill: theme.palette.primary.main,
                },
            },
            '&:hover': {
                '& fieldset': { borderColor: 'transparent' },
            },
            '& fieldset': {
                borderColor: 'transparent',
                borderWidth: 1,
            },
        },
        '& .MuiOutlinedInput-input': {
            padding: '12px 14px 14px 5px',
        },
    },
}))(TextField)

const TextLimitProgress = withStyles(() => ({}))(CircularProgress)

export const Home = (): React.ReactElement => {
    const classes = useHomeStyles();
    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid sm={1} item md={3}>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid sm={8} item md={6}>
                    <Paper className={classes.tweetsWrapper} variant='outlined'>
                        <Paper className={classes.tweetsHeader} variant='outlined'>
                            <Typography variant='h6'>Главная</Typography>
                        </Paper>
                        <Paper>
                            <div className={classes.addForm}>
                                <div className={classes.addFormBody}>
                                    <Avatar
                                        className={classes.tweetAvatar}
                                        alt="АВА"
                                        src="https://sun9-74.userapi.com/impg/gmdJPjBAe2xQWQMW9c2Lr4nHDlSUkR0_NkWkuw/_7QkDKCtiCs.jpg?size=1600x1600&quality=95&sign=0be456bfbdcb645ed228697ce9c8204a&type=album"
                                    />
                                    <TextareaAutosize
                                        className={classes.addFormTextarea}
                                        placeholder='Что происходит?'
                                    />
                                </div>
                                <div className={classes.addFormBottom}>
                                    <div className={classNames(classes.tweetFooter, classes.addFormActions)}>
                                        <IconButton color="primary">
                                            <ImageOutlinedIcon style={{ fontSize: 26 }} />
                                        </IconButton>
                                        <IconButton color="primary">
                                            <EmojiIcon style={{ fontSize: 26 }} />
                                        </IconButton>
                                    </div>
                                    <div className={classes.addFormBottomRight}>
                                        <span>280</span>
                                        <div className={classes.addFormCircleProgress}>
                                            <CircularProgress variant='static' size={20} thickness={4} value={20} />
                                            <CircularProgress style={{ color: 'rgba(0,0,0,0.1)' }} variant='static' size={20} thickness={4} value={100} />
                                        </div>
                                        <Button color="primary" variant="contained">
                                            Твитнуть
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.addFormBottomLine} />
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
                <Grid item sm={3} md={3}>
                    <div className={classes.rightSide}>
                        <SearchTextField
                            variant="outlined"
                            placeholder="Поиск в Твиттере"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth />
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader}>
                                <b>Актуальные темы</b>

                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText primary="Санкт петербург"
                                        secondary={<Typography component="span" variant='body2'>
                                            Твитов 3 331
                                        </Typography>} />
                                </ListItem>
                                <Divider component="li" />
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText primary="Беларусь"
                                        secondary={<Typography component="span" variant='body2'>
                                            Твитов 13 331
                                        </Typography>} />
                                </ListItem>
                                <Divider component="li" />
                            </List>
                        </Paper>
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader}>
                                <b>Кого читать</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar alt="alina" src="https://sun9-74.userapi.com/impg/gmdJPjBAe2xQWQMW9c2Lr4nHDlSUkR0_NkWkuw/_7QkDKCtiCs.jpg?size=1600x1600&quality=95&sign=0be456bfbdcb645ed228697ce9c8204a&type=album" />
                                    </ListItemAvatar>
                                    <ListItemText primary="Alina Rebzon"
                                        secondary={<Typography component="span" variant='body2'>
                                            Твитов 13 331
                                        </Typography>} />
                                    <Button color="primary"><PersonAddOutlined /></Button>
                                </ListItem>
                                <Divider component="li" />
                            </List>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}
