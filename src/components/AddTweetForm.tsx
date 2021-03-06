import { Avatar, Button, CircularProgress, IconButton, Snackbar, TextareaAutosize } from '@material-ui/core'
import classNames from 'classnames'
import React from 'react'
import { ImageOutlined as ImageOutlinedIcon, PersonAddOutlined, SentimentSatisfiedOutlined as EmojiIcon } from '@material-ui/icons'
import { useHomeStyles } from '../pages/Home/theme';
import { useDispatch, useSelector } from 'react-redux';
import { addTweet, fetchAddTweet, setAddFormState } from '../store/ducks/tweets/contracts/actionCreator';
import { selectAddFormState } from '../store/ducks/tweets/selectors';
import { AddFormState } from '../store/ducks/tweets/contracts/state';
import Alert from '@material-ui/lab/Alert'
import { UploadImages } from './UploadImages';
import { uploadImage } from '../utils/uploadImage';

interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>;
    maxRows?: number;
}

const MAX_LENGTH = 280;

export interface ImageObj {
    blobUrl: string;
    file: File;
}

export const AddTweetForm: React.FC<AddTweetFormProps> = ({ classes, maxRows = 15 }: AddTweetFormProps): React.ReactElement => {
    const dispatch = useDispatch()
    const [text, setText] = React.useState<string>('')

    const addFormState = useSelector(selectAddFormState)
    const textLimitPercent = (text.length / 280) * 100;
    const textCount = MAX_LENGTH - text.length
    const [images, setImages] = React.useState<ImageObj[]>([])

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }
    const handleClickAddTweet = async (): Promise<void> => {
        setText('')
        dispatch(setAddFormState(AddFormState.LOADING))
        let urls = []
        for (let i = 0; i < images.length; i++) {
            const file = images[i].file
            const { url } = await uploadImage(file)
            urls.push(url)
        }
        dispatch(fetchAddTweet({ text, images: urls }))
        setImages([])
    }

    return (
        <div >

            <div className={classes.addFormBody}>
                <Avatar
                    className={classes.tweetAvatar}
                    alt="??????"
                    src="https://sun9-74.userapi.com/impg/gmdJPjBAe2xQWQMW9c2Lr4nHDlSUkR0_NkWkuw/_7QkDKCtiCs.jpg?size=1600x1600&quality=95&sign=0be456bfbdcb645ed228697ce9c8204a&type=album"
                />
                <TextareaAutosize
                    onChange={handleChangeTextarea}
                    value={text}
                    maxRows={maxRows}
                    className={classes.addFormTextarea}
                    placeholder='?????? ?????????????????????'
                />
            </div>
            <div className={classes.addFormBottom}>
                <div className={classNames(classes.tweetFooter, classes.addFormActions)}>
                    <UploadImages images={images} onChangeImages={setImages} />
                    {/* <IconButton color="primary">
                        <EmojiIcon style={{ fontSize: 26 }} />
                    </IconButton> */}
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
                    <Button onClick={handleClickAddTweet} disabled={addFormState === AddFormState.LOADING || !text || text.length > MAX_LENGTH} color="primary" variant="contained">
                        {addFormState === AddFormState.LOADING ? <CircularProgress size={16} /> : '????????????????'}

                    </Button>
                </div>
            </div>
            {addFormState === AddFormState.ERROR && <Alert severity="error">???????????? ?????? ???????????????????? ??????????</Alert>}
        </div>
    )
}
