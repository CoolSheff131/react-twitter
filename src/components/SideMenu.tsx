import React from 'react'
import { Button, Hidden, IconButton, Typography } from '@material-ui/core'
import { useHomeStyles } from '../pages/Home'
import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined'
import MessageIcon from '@material-ui/icons/EmailOutlined'
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined'
import ListIcon from '@material-ui/icons/ListAltOutlined'
import UserIcon from '@material-ui/icons/PermIdentityOutlined'
import CreateIcon from '@material-ui/icons/Create'

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>
}

export const SideMenu: React.FC<SideMenuProps> = ({ classes }: SideMenuProps): React.ReactElement => {
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
                <Button className={classes.sideMenuTweetButton} variant="contained" color="primary" fullWidth>
                    <Hidden smDown>
                        Твитнуть
                    </Hidden>
                    <Hidden mdUp>
                        <CreateIcon />
                    </Hidden>
                </Button>
            </li>
        </ul>
    )
}
