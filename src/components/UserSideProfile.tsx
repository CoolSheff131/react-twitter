import { Avatar, Menu, MenuItem, Popover, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHomeStyles } from '../pages/Home/theme'
import { signOut } from '../store/ducks/user/contracts/actionCreator'
import { selectUserData } from '../store/ducks/user/selectors'

interface UserSideProfileProps {

}

export const UserSideProfile: React.FC<UserSideProfileProps> = () => {
    const classes = useHomeStyles()
    const dispatch = useDispatch()
    const userData = useSelector(selectUserData)
    const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const handleOpenPopup = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        setAnchorEl(event.currentTarget)
    }

    const handleClosePopup = (): void => {
        setAnchorEl(null)
    }

    const handleSignOut = () => {
        window.localStorage.removeItem('token')
        dispatch(signOut())
    }

    if (!userData) {
        return null
    }

    return (
        <>
            <div onClick={handleOpenPopup} >
                <Avatar />
                <div>
                    <b>{userData.fullname}</b>
                    <Typography >@{userData.username}</Typography>
                </div>

            </div>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClosePopup}
            >
                <MenuItem></MenuItem>
            </Menu>
        </>
    )
}
