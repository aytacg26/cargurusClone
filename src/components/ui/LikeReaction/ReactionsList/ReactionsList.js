import React from 'react';
import Profile from '../../Profile/Profile';
import classes from './ReactionsList.module.scss';

const ReactionsList = ({ reactions, onClick }) => {
  const reactionIcons =
    reactions.length > 5 ? reactions.slice(0, 5) : reactions;

  return (
    <div className={classes.AllReactions} onClick={onClick}>
      {reactionIcons.map((reaction) => (
        <Profile
          key={reaction.id}
          image={reaction.user.profileImage}
          circle
          size={20}
          margin='0 2px'
        />
      ))}
    </div>
  );
};

export default ReactionsList;
