import React from 'react';
import { useHomeStyles } from '../pages/Home/theme';
import { Avatar, IconButton, Menu, MenuItem, Paper, Typography } from '@material-ui/core'
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import RepostIcon from '@material-ui/icons/RepeatOutlined'
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined'
import ShareIcon from '@material-ui/icons/ReplyOutlined'
import classNames from 'classnames'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { formatDate } from '../utils/formatDate';
import { MoreVertRounded } from '@material-ui/icons';
import { ImageList } from './ImageList';

interface TweetProps {
  _id: string;
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  createdAt: string;
  images?: string[];
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({ _id, classes, user, text, createdAt, images }: TweetProps): React.ReactElement => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()

  const handleClickTweet = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault()
    navigate(`/home/tweet/${_id}`)
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <a onClick={handleClickTweet} className={classes.tweetWrapper} >
      <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">

        <Avatar
          alt="user Avatar"
          src={user.avatarUrl}
          className={classes.tweetAvatar}
        />
        <div>

          <div>
            <b>{user.fullname}</b>&nbsp;
            <span className={classes.tweetsUserName}>@{user.username}</span>&nbsp;
            <span className={classes.tweetsUserName}>.</span>&nbsp;
            <span className={classes.tweetsUserName}>{formatDate(new Date(createdAt))}</span>
            <div className={classes.tweetPopupMenu}>
              <IconButton onClick={handleClick}>
                <MoreVertRounded />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}>
                <MenuItem>
                  Редактировать
                </MenuItem>
                <MenuItem>
                  Удалить
                </MenuItem>
              </Menu>
            </div>
          </div>
          <Typography variant="body1" gutterBottom>
            {text}
            {images && <ImageList images={images} />}
          </Typography>
          <div className={classes.tweetFooter}>
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
          </div>
        </div>
      </Paper>
    </a>
  );
};
