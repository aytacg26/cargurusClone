import React, { useState } from 'react';
import { Fragment } from 'react';
import DirectionButton from '../DirectionButtons/DirectionButton';
import SliderDot from '../SliderDot/SliderDot';
import classes from './ProductImageSlider.module.scss';
import noImage from '../../../assets/images/noImageAvailable.png';
import Modal from '../Modal/Modal';
import { BiZoomIn } from 'react-icons/bi';
import { IoMdCloseCircle } from 'react-icons/io';

const ImageList = ({ images, counter }) => {
  return images.map((image, index) => (
    <img
      src={image.image}
      alt={image.title}
      title={image.title}
      key={image.id}
      style={{ left: `${(index + 1) * 100 - counter * 100}%` }}
    />
  ));
};

const Arrows = ({ images, counter, onClick }) => {
  return (
    <div className={classes.Arrows}>
      <DirectionButton
        direction='left'
        id='left'
        onClick={onClick}
        disabled={counter === images.length}
      />
      <DirectionButton
        direction='right'
        id='right'
        onClick={onClick}
        disabled={counter === 1}
      />
    </div>
  );
};

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

const ImageSlide = ({
  images,
  counter,
  onArrowClick,
  showDots,
  onDotClick,
}) => {
  return (
    <Fragment>
      <ImageList images={images} counter={counter} />
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

const ProductImageSlider = ({ images, showDots, showThumbnails }) => {
  const [counter, setCounter] = useState(1);
  const [showModal, setShowModal] = useState(false);

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

  const handleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <Fragment>
      <div className={classes.ImageContainer}>
        <div className={classes.MainImageSection}>
          <div className={classes.ImageRightIcon}>
            <BiZoomIn color='#0277bd' size='35px' onClick={handleModal} />
          </div>

          <ImageSlide
            images={images}
            counter={counter}
            showDots={showDots}
            onArrowClick={handleImageSlide}
            onDotClick={handleThumbClick}
          />
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
      <Modal
        onClick={handleModal}
        hide={!showModal}
        modalStyle={{
          backgroundColor: 'rgba(255, 255, 255, 0.45)',
          border: '1px solid #fff',
        }}
      >
        <div className={classes.ZoomImages}>
          <div className={classes.ImageRightIcon}>
            <IoMdCloseCircle
              color='#0277bd'
              size='35px'
              onClick={handleModal}
            />
          </div>
          <ImageSlide
            images={images}
            counter={counter}
            showDots={showDots}
            onArrowClick={handleImageSlide}
            onDotClick={handleThumbClick}
          />
        </div>
      </Modal>
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
