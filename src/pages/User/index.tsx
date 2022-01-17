import { Avatar, Paper, Tab, Tabs, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { BackButton } from '../../components/BackButton'
import { Tweet } from '../../components/Tweet'
import { selectTweetsItems } from '../../store/ducks/tweets/selectors'
import { useHomeStyles } from '../Home/theme'

import './User.scss'

export const User = () => {
    const [value, setValue] = React.useState(2)
    const tweets = useSelector(selectTweetsItems)
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue)
    }
    const classes = useHomeStyles()
    return (
        <Paper>
            <Paper>
                <BackButton />
                <div>
                    <Typography>
                        CoolSheff
                    </Typography>
                    <Typography>65 твита</Typography>
                </div>
            </Paper>
            <div className="user__header"></div>
            <div className="user__info">
                <Avatar />
                <h2 className='user__info-fullname'>CoolSheff</h2>
                <h6 className='user__info-username'>@CoolSheff</h6>
                <p className='user__info-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veniam fugit non!</p>
                <ul className='user__info-details'>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
            <Tabs
                value={value}
                onChange={handleChange}
            >
                <Tab label="Твиты" />
                <Tab label="Твиты и ответы" />
                <Tab label="Медиа" />
                <Tab label="Нравиться" />
            </Tabs>
            {
                tweets.map((tweet) => (
                    <Tweet key={tweet._id} classes={classes} images={tweet.images} {...tweet} />
                ))
            }
        </Paper>
    )
}
