import React, { useState } from 'react';
import { Fragment } from 'react';
import DirectionButton from '../DirectionButtons/DirectionButton';
import SliderDot from '../SliderDot/SliderDot';
import classes from './ProductImageSlider.module.scss';
import noImage from '../../../assets/images/noImageAvailable.png';
import Modal from '../Modal/Modal';

const ProductImageSlider = ({ images, showDots, showThumbnails }) => {
  const [counter, setCounter] = useState(1);

  if (!images || images?.length === 0) {
    return (
      <div className={classes.ImageContainer}>
        <div className={classes.MainImageSection}>
          <img
            src={noImage}
            title='No Image'
            alt='Empty'
            style={{ height: '100%' }}
          />
        </div>
      </div>
    );
  }

  const handleImageSlide = (e) => {
    if (e.target.id === 'left' && counter <= images.length) {
      setCounter((prevState) => prevState + 1);
    } else if (e.target.id === 'right' && counter > 0) {
      setCounter((prevState) => prevState - 1);
    }
  };

  const handleThumbClick = (id) => {
    const clickedImg = images.indexOf(images.filter((img) => img.id === id)[0]);
    setCounter(clickedImg + 1);
  };

  return (
    <Fragment>
      <div className={classes.ImageContainer}>
        <div className={classes.MainImageSection}>
          {images.map((image, index) => (
            <img
              src={image.image}
              alt={image.title}
              title={image.title}
              key={image.id}
              style={{ left: `${(index + 1) * 100 - counter * 100}%` }}
            />
          ))}
          <div className={classes.Arrows}>
            <DirectionButton
              direction='left'
              id='left'
              onClick={handleImageSlide}
              disabled={counter === images.length}
            />
            <DirectionButton
              direction='right'
              id='right'
              onClick={handleImageSlide}
              disabled={counter === 1}
            />
          </div>
          {showDots && (
            <div className={classes.Dots}>
              {images.map((img, index) => (
                <SliderDot
                  isActive={index + 1 === counter}
                  key={`dot-${img.id}`}
                  onClick={() => handleThumbClick(img.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {showThumbnails && (
        <div className={classes.Thumbnails}>
          {images.map((image, index) => (
            <img
              src={image.image}
              alt={image.title}
              title={image.title}
              key={`${image.id}-thumb`}
              style={{ left: `${(index + 1) * 145 - counter * 145}px` }}
              className={index + 1 === counter ? classes.selected : ''}
              onClick={() => handleThumbClick(image.id)}
            />
          ))}
        </div>
      )}
      {/* <Modal>
        <div className={classes.ZoomImages}>
          {images.map((image, index) => (
            <img
              src={image.image}
              alt={image.title}
              title={image.title}
              key={`zoom-${image.id}`}
              style={{ left: `${(index + 1) * 150 - counter * 150}%` }}
            />
          ))}
        </div>
      </Modal> */}
    </Fragment>
  );
};

export default ProductImageSlider;

/**
 *
 *
 *
 *
 */
