import React, { Fragment } from 'react';
import Arrows from '../Arrows/Arrows';
import ImageList from '../ImageList/ImageList';
import SliderDots from '../SliderDots/SliderDots';

const ImageSlide = ({
  images,
  counter,
  onArrowClick,
  showDots,
  onDotClick,
}) => {
  return (
    <Fragment>
      <ImageList images={images} counter={counter} size={100} unit='%' />
      <Arrows images={images} counter={counter} onClick={onArrowClick} />
      <SliderDots
        images={images}
        counter={counter}
        onClick={onDotClick}
        showDots={showDots}
      />
    </Fragment>
  );
};

export default ImageSlide;
