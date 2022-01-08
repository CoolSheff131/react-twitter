import { Paper, List, ListItem, ListItemText, Typography, Divider } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHomeStyles } from '../pages/Home/theme'
import { TagsState } from '../store/tags/contracts/state'
import { selectIsTagsLoaded, selectTagsItems } from '../store/tags/selectors'


interface TagsProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const Tags: React.FC<TagsProps> = ({ classes }: TagsProps): React.ReactElement | null => {
    const items = useSelector(selectTagsItems)
    const isLoaded = useSelector(selectIsTagsLoaded)
    if (!isLoaded) {
        return null
    }
    return (
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
                {
                    items.map(item =>
                        <React.Fragment key={item._id}>
                            <ListItem className={classes.rightSideBlockItem}>
                                <ListItemText primary={item.name}
                                    secondary={<Typography component="span" variant='body2'>
                                        Твитов {item.count}
                                    </Typography>} />
                            </ListItem>
                            <Divider component="li" />
                        </React.Fragment>
                    )
                }
            </List>
        </Paper>
    )
}
