import React from 'react';
import classes from './StoryCard.module.scss';

const StoryCard = ({ title, story, style }) => {
  if (!title && !story) {
    return null;
  }

  return (
    <div className={classes.dealStory} style={style}>
      <span className={classes.storyIcon}></span>
      <h4>{title}</h4>
      <p>{story}</p>
    </div>
  );
};

export default StoryCard;
