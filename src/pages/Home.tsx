import { Grid, IconButton } from '@material-ui/core'
import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined'
import MessageIcon from '@material-ui/icons/EmailOutlined'
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined'
import ListIcon from '@material-ui/icons/ListAltOutlined'
import UserIcon from '@material-ui/icons/PermIdentityOutlined'


export const Home = () => {
    return (
        <section>
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <ul>
                        <li>
                            <IconButton aria-label="delete" color="primary">
                                <TwitterIcon color="primary" />
                            </IconButton>
                        </li>
                        <li>
                            <IconButton aria-label="delete" color="primary">
                                <SearchIcon color="primary" />
                            </IconButton>
                        </li>
                        <li>
                            <IconButton aria-label="delete" color="primary">
                                <NotificationIcon color="primary" />
                            </IconButton>
                        </li>
                        <li>
                            <IconButton aria-label="delete" color="primary">
                                <MessageIcon color="primary" />
                            </IconButton>
                        </li>
                        <li>
                            <IconButton aria-label="delete" color="primary">
                                <BookmarkIcon color="primary" />
                            </IconButton>
                        </li>
                        <li>
                            <IconButton aria-label="delete" color="primary">
                                <ListIcon color="primary" />
                            </IconButton>
                        </li>
                        <li>
                            <IconButton aria-label="delete" color="primary">
                                <UserIcon color="primary" />
                            </IconButton>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={7}></Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </section>
    )
}
