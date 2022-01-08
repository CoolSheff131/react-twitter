import { Avatar, Button, CircularProgress, IconButton, TextareaAutosize } from '@material-ui/core'
import classNames from 'classnames'
import React from 'react'
import { ImageOutlined as ImageOutlinedIcon, PersonAddOutlined, SentimentSatisfiedOutlined as EmojiIcon } from '@material-ui/icons'
import { useHomeStyles } from '../pages/Home/theme';
import { useDispatch } from 'react-redux';
import { addTweet, fetchAddTweet } from '../store/ducks/tweets/contracts/actionCreator';

interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>;
    maxRows?: number;
}

const MAX_LENGTH = 280;


export const AddTweetForm: React.FC<AddTweetFormProps> = ({ classes, maxRows = 15 }: AddTweetFormProps): React.ReactElement => {
    const dispatch = useDispatch()
    const [text, setText] = React.useState<string>('')
    const textLimitPercent = (text.length / 280) * 100;
    const textCount = MAX_LENGTH - text.length

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }
    const handleClickAddTweet = (): void => {
        setText('')
        dispatch(fetchAddTweet(text))
    }
    return (
        <div >
            <div className={classes.addFormBody}>
                <Avatar
                    className={classes.tweetAvatar}
                    alt="АВА"
                    src="https://sun9-74.userapi.com/impg/gmdJPjBAe2xQWQMW9c2Lr4nHDlSUkR0_NkWkuw/_7QkDKCtiCs.jpg?size=1600x1600&quality=95&sign=0be456bfbdcb645ed228697ce9c8204a&type=album"
                />
                <TextareaAutosize
                    onChange={handleChangeTextarea}
                    value={text}
                    maxRows={maxRows}
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
                    {text && (
                        <>
                            <span>{textCount}</span>
                            <div className={classes.addFormCircleProgress}>
                                <CircularProgress style={text.length > MAX_LENGTH ? { color: 'red' } : undefined} variant='static' size={20} thickness={4} value={text.length > MAX_LENGTH ? 100 : textLimitPercent} />
                                <CircularProgress style={{ color: 'rgba(0,0,0,0.1)' }} variant='static' size={20} thickness={4} value={100} />
                            </div>
                        </>
                    )}
                    <Button onClick={handleClickAddTweet} disabled={!text && text.length > MAX_LENGTH} color="primary" variant="contained">
                        Твитнуть
                    </Button>
                </div>
            </div>
        </div>
    )
}
