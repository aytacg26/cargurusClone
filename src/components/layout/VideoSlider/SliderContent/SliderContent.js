import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import VideoSection from '../VideoSection/VideoSection';
import classes from './SliderContent.module.css';

const SliderContent = ({ video, name, testimonial, left }) => {
  const contentClass = `${classes.SliderContent} ${
    left === 0 ? classes.Move : ''
  }`;

  return (
    <div className={contentClass} style={{ left: `${left}%` }}>
      <VideoSection url={video} />
      <Testimonial
        header='WHAT OUR USERS SAY'
        name={name}
        testimonial={testimonial}
      />
    </div>
  );
};

export default SliderContent;
