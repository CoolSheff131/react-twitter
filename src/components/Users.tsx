import { Paper, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Button, Divider } from '@material-ui/core'
import { PersonAddOutlined } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHomeStyles } from '../pages/Home/theme'
import { selectUsersItems } from '../store/ducks/users/selectors'

export const Users = () => {
    const classes = useHomeStyles()
    const items = useSelector(selectUsersItems)
    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader}>
                <b>Кого читать</b>
            </Paper>
            <List>
                {
                    items.map((item) => {
                        <ListItem className={classes.rightSideBlockItem}>
                            <ListItemAvatar>
                                <Avatar alt="alina" src="https://sun9-74.userapi.com/impg/gmdJPjBAe2xQWQMW9c2Lr4nHDlSUkR0_NkWkuw/_7QkDKCtiCs.jpg?size=1600x1600&quality=95&sign=0be456bfbdcb645ed228697ce9c8204a&type=album" />
                            </ListItemAvatar>
                            <ListItemText primary="Alina Rebzon"
                                secondary={<Typography component="span" variant='body2'>
                                    Твитов {item.email}
                                </Typography>} />
                            <Button color="primary"><PersonAddOutlined /></Button>
                        </ListItem>
                    })
                }

                <Divider component="li" />
            </List>
        </Paper>
    )
}
