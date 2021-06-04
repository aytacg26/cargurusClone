import React from 'react';
import Profile from '../../Profile/Profile';
import { BiLike, BiDislike } from 'react-icons/bi';
import classes from './ReactionsModalBar.module.scss';
import { formatDate } from '../../../../utils/utilsFuncs';

const ReactionsModalBar = ({ reaction }) => {
  return (
    <div className={classes.ModalBar}>
      <div className={classes.ProfileData}>
        <Profile image={reaction.user.profileImage} circle size={42} />
        <div className={classes.NameDate}>
          <span className={classes.UserName}>{reaction.user.userName}</span>
          <span className={classes.Date}>{formatDate(reaction.date)}</span>
        </div>
      </div>
      {reaction.typeNo ? (
        <BiLike color='#0277bd' size={20} />
      ) : (
        <BiDislike color='rgb(248, 19, 19)' size={20} />
      )}
    </div>
  );
};

export default ReactionsModalBar;
