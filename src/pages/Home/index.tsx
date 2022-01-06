import { Avatar, Button, Container, Divider, Grid, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, Paper, TextField, Theme, Typography } from '@material-ui/core'
import React from 'react'

import { Tweet } from '../../components/Tweet'
import { SideMenu } from '../../components/SideMenu'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import { PersonAddOutlined } from '@material-ui/icons'
import { AddTweetForm } from '../../components/AddTweetForm'
import { useHomeStyles } from './theme'
import { SearchTextField } from '../../components/SearchTextField'

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

                                <AddTweetForm classes={classes} />
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