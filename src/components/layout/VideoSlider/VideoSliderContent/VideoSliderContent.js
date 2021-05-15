import React, { Fragment } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import VideoSection from '../VideoSection/VideoSection';
import classes from './VideoSliderContent.module.css';

const VideoSliderContent = ({ video, name, testimonial }) => {
  return (
    <div className={classes.VideoSliderContent}>
      <VideoSection url={video} />
      <Testimonial
        header='WHAT OUR USERS SAY'
        name={name}
        testimonial={testimonial}
      />
    </div>
  );
};

export default VideoSliderContent;
