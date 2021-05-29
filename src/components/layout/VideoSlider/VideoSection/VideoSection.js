import React from 'react';
import classes from './VideoSection.module.scss';
import StoryCard from '../../../ui/StoryCard/StoryCard';

const VideoSection = ({ url, story }) => {
  return (
    <div className={classes.VideoSection}>
      <iframe
        src={url}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
      <StoryCard
        {...story}
        style={{ bottom: '9px', backgroundColor: '#fff' }}
      />
    </div>
  );
};

export default VideoSection;
