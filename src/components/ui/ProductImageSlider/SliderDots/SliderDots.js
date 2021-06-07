import React, { Fragment } from 'react';
import SliderDot from '../../SliderDot/SliderDot';
import classes from './SliderDots.module.scss';

const SliderDots = ({ showDots, images, counter, onClick }) => {
  return (
    <Fragment>
      {showDots && (
        <div className={classes.Dots}>
          {images.map((img, index) => (
            <SliderDot
              isActive={index + 1 === counter}
              key={`dot-${img.id}`}
              onClick={() => onClick(img.id)}
            />
          ))}
        </div>
      )}
    </Fragment>
  );
};
export default SliderDots;
