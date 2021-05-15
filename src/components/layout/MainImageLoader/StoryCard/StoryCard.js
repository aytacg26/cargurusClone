import React from 'react';
import classes from './StoryCard.module.css';

const StoryCard = ({ title, story }) => {
  if (!title && !story) {
    return null;
  }

  return (
    <div className={classes.dealStory}>
      <span className={classes.storyIcon}></span>
      <h4>{title}</h4>
      <p>{story}</p>
    </div>
  );
};

export default StoryCard;
