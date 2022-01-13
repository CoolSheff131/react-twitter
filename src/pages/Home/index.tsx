import { Avatar, Button, CircularProgress, Container, Divider, Grid, IconButton, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, Paper, TextField, Theme, Typography } from '@material-ui/core'
import React from 'react'

import { Tweet } from '../../components/Tweet'
import { SideMenu } from '../../components/SideMenu'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import { ArrowBack, PersonAddOutlined } from '@material-ui/icons'
import { AddTweetForm } from '../../components/AddTweetForm'
import { useHomeStyles } from './theme'
import { SearchTextField } from '../../components/SearchTextField'
import { fetchTweets } from '../../store/ducks/tweets/contracts/actionCreator'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors'
import { fetchTags } from '../../store/ducks/tags/contracts/actionCreator'
import { Tags } from '../../components/Tags'
import { Route, Routes } from 'react-router-dom'
import { BackButton } from '../../components/BackButton'
import { FullTweet } from './components/FullTweet'
import { Users } from '../../components/Users'

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
                            <Routes>
                                <Route path="/home/*" element={
                                    <BackButton />
                                } />
                            </Routes>
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
                                tweets.map(tweet => {
                                    return <Tweet
                                        key={tweet._id}
                                        {...tweet}
                                        classes={classes} />
                                })
                            } />
                            <Route path="/home/tweet/:id" element={<FullTweet />} />
                        </Routes >

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
                        <Users />
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}
