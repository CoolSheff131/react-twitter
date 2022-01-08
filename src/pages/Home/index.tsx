import { Avatar, Button, CircularProgress, Container, Divider, Grid, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, Paper, TextField, Theme, Typography } from '@material-ui/core'
import React from 'react'

import { Tweet } from '../../components/Tweet'
import { SideMenu } from '../../components/SideMenu'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import { PersonAddOutlined } from '@material-ui/icons'
import { AddTweetForm } from '../../components/AddTweetForm'
import { useHomeStyles } from './theme'
import { SearchTextField } from '../../components/SearchTextField'
import { fetchTweets } from '../../store/ducks/tweets/contracts/actionCreator'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors'
import { fetchTags } from '../../store/tags/contracts/actionCreator'
import { Tags } from '../../components/Tags'
import { Route, Routes } from 'react-router-dom'

export const Home = (): React.ReactElement => {
    const dispatch = useDispatch()
    const classes = useHomeStyles();
    const tweets = useSelector(selectTweetsItems)
    const isLoading = useSelector(selectIsTweetsLoading)

    React.useEffect(() => {
        dispatch(fetchTweets())
        dispatch(fetchTags())
    }, [])
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

                                <AddTweetForm classes={classes} />
                            </div>
                            <div className={classes.addFormBottomLine} />
                        </Paper>
                        <Routes>
                            <Route path="home" element={isLoading ? (<div className={classes.tweetsCentred}> <CircularProgress /></div>) :
                                tweets.map(tweet => <Tweet
                                    key={tweet._id}
                                    text={tweet.text}
                                    user={tweet.user}
                                    classes={classes} />
                                )
                            } />
                        </Routes >


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
                        <Tags classes={classes} />
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
