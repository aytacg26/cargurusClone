import React, { useState } from 'react';
import { Fragment } from 'react';
import classes from './ProductImageSlider.module.scss';
import noImage from '../../../assets/images/noImageAvailable.png';
import Modal from '../Modal/Modal';
import { BiZoomIn } from 'react-icons/bi';
import { IoMdCloseCircle } from 'react-icons/io';
import ImageSlide from './ImageSlide/ImageSlide';
import ImageList from './ImageList/ImageList';

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
          <ImageList
            counter={counter}
            images={images}
            size={145}
            unit='px'
            onClick={handleThumbClick}
            hasSelectionBorder
          />
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
