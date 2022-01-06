import React from 'react'
import { Button, Hidden, IconButton, Typography } from '@material-ui/core'
import { useHomeStyles } from '../pages/Home/theme';
import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined'
import MessageIcon from '@material-ui/icons/EmailOutlined'
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined'
import ListIcon from '@material-ui/icons/ListAltOutlined'
import UserIcon from '@material-ui/icons/PermIdentityOutlined'
import CreateIcon from '@material-ui/icons/Create'
import ModalBlock from './ModalBlock';
import { AddTweetForm } from './AddTweetForm';

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>
}

export const SideMenu: React.FC<SideMenuProps> = ({ classes }: SideMenuProps): React.ReactElement => {
    const [visibleAddTweet, setvisibleAddTweet] = React.useState<boolean>(false)
    const handleClickOpenAddTweet = () => {
        setvisibleAddTweet(true)
    }
    const handleCloseAddTweet = () => {
        setvisibleAddTweet(false)
    }
    return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
                <IconButton className={classes.logo} aria-label="delete" color="primary">
                    <TwitterIcon color="primary" className={classes.logoIcon} />
                </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography variant="h6" className={classes.sideMenuListItemLabel} >Поиск</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <NotificationIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography variant="h6" className={classes.sideMenuListItemLabel} >Уведомления</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>

                    <MessageIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography variant="h6" className={classes.sideMenuListItemLabel}>Сообщения</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>

                    <BookmarkIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography variant="h6" className={classes.sideMenuListItemLabel}>Закладки</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>

                    <ListIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography variant="h6" className={classes.sideMenuListItemLabel}>Список</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>

                    <UserIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography variant="h6" className={classes.sideMenuListItemLabel}>Профиль</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <Button onClick={handleClickOpenAddTweet} className={classes.sideMenuTweetButton} variant="contained" color="primary" fullWidth>
                    <Hidden smDown>
                        Твитнуть
                    </Hidden>
                    <Hidden mdUp>
                        <CreateIcon />
                    </Hidden>
                </Button>
                <ModalBlock onClose={handleCloseAddTweet} visible={visibleAddTweet} >
                    <div style={{ width: 550 }}>
                        <AddTweetForm classes={classes} />
                    </div>
                </ModalBlock>
            </li>
        </ul>
    )
}
