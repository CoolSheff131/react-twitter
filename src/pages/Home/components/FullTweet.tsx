import { CircularProgress } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Tweet } from '../../../components/Tweet'
import { fetchTweetData } from '../../../store/ducks/tweet/contracts/actionCreator'
import { selectIsTweetLoading, selectTweetData } from '../../../store/ducks/tweet/selectors'
import { useHomeStyles } from '../theme'

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
    }, [])
    if (!tweetData) {
        return null
    }
    return isLoading ? (
        <div className={classes.tweetsCentred}>
            <CircularProgress />
        </div>
    ) : (
        <Tweet classes={classes} {...tweetData} />
    )

}
