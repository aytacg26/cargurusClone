import React from 'react';
import classes from './VideoSection.module.css';

const VideoSection = ({ url }) => {
  return (
    <div className={classes.VideoSection}>
      <iframe
        src={url}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoSection;
