import { Avatar, CircularProgress, IconButton, Paper, Typography } from '@material-ui/core'
import classNames from 'classnames'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { text } from 'stream/consumers'
import { Tweet } from '../../../components/Tweet'
import format from 'date-fns/format'
import ruLand from 'date-fns/locale/ru'
import { fetchTweetData, setTweetData } from '../../../store/ducks/tweet/contracts/actionCreator'
import { selectIsTweetLoading, selectTweetData } from '../../../store/ducks/tweet/selectors'
import { useHomeStyles } from '../theme'
import { ImageList } from '../../../components/ImageList'

export const FullTweet: React.FC = (): React.ReactElement | null => {
    const dispatch = useDispatch()
    const classes = useHomeStyles()
    const tweetData = useSelector(selectTweetData)
    const isLoading = useSelector(selectIsTweetLoading)
    const params = useParams()
    const id = params.id
    React.useEffect(() => {
        if (id) {
            dispatch(fetchTweetData(id))
        }
        return () => {
            dispatch(setTweetData(undefined))
        }
    }, [])
    if (isLoading) {
        return (<div className={classes.tweetsCentred}>
            <CircularProgress />
        </div>)
    }
    if (tweetData) {
        return <Paper className={classes.fullTweet}>
            <div className={classNames(classes.tweetsHeaderUser)}>
                <Avatar
                    alt="user Avatar"
                    src={tweetData.user.avatarUrl}
                    className={classes.tweetAvatar}
                />
                <Typography>
                    <b>{tweetData.user.fullname}</b>&nbsp;
                    <div>
                        <span className={classes.tweetsUserName}>@{tweetData.user.username}</span>&nbsp;
                        <span className={classes.tweetsUserName}>.</span>&nbsp;
                        <span className={classes.tweetsUserName}>{format(new Date(tweetData.createdAt), 'H:mm', { locale: ruLand })}</span>
                        <span className={classes.tweetsUserName}>{format(new Date(tweetData.createdAt), 'dd MMM. yyyy г.', { locale: ruLand })}</span>
                    </div>
                </Typography>
            </div>
            <Typography className={classes.fullTweetText} gutterBottom>
                {tweetData.text}
                {tweetData.images && <ImageList images={tweetData.images} />}
            </Typography>
            {/* <div className={classes.tweetFooter}>
                    <div>
                        <IconButton>
                            <CommentIcon style={{ fontSize: 20 }} />
                        </IconButton>
                        <span>1</span>
                    </div>
                    <div>
                        <IconButton>
                            <RepostIcon style={{ fontSize: 20 }} />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton>
                            <LikeIcon style={{ fontSize: 20 }} />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton>
                            <ShareIcon style={{ fontSize: 20 }} />
                        </IconButton>
                    </div>
                </div> */}
        </Paper>
    }
    return null
}
