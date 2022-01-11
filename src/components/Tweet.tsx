import React from 'react';
import { useHomeStyles } from '../pages/Home/theme';
import { Avatar, IconButton, Paper, Typography } from '@material-ui/core'
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import RepostIcon from '@material-ui/icons/RepeatOutlined'
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined'
import ShareIcon from '@material-ui/icons/ReplyOutlined'
import classNames from 'classnames'
import { Link, Route, Routes } from 'react-router-dom';
import { formatDate } from '../utils/formatDate';

interface TweetProps {
  _id: string;
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  createdAt: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({ _id, classes, user, text, createdAt }: TweetProps): React.ReactElement => {
  return (
    <Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`} >
      <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">

        <Avatar
          alt="user Avatar"
          src={user.avatarUrl}
          className={classes.tweetAvatar}
        />
        <div>

          <Typography>
            <b>{user.fullname}</b>&nbsp;
            <span className={classes.tweetsUserName}>@{user.username}</span>&nbsp;
            <span className={classes.tweetsUserName}>.</span>&nbsp;
            <span className={classes.tweetsUserName}>{formatDate(new Date(createdAt))}</span>

          </Typography>
          <Typography variant="body1" gutterBottom>
            {text}
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
    </Link>
  );
};
