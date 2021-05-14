import React, { useState, useEffect, useRef } from 'react';
import classes from './InfoCard.module.css';
import { loadImage } from '../../../utils/utilsFuncs';
import loading from '../../../assets/images/BodyStyles/ajax-loader.gif';

const InfoCard = ({ image, header, text }) => {
  const [showTitle, setShowTitle] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    loadImage(image, imageRef.current, setShowTitle);
  }, [image]);

  if (!image && !header) {
    return null;
  }

  return (
    <div className={classes.infoCard}>
      {image && (
        <div className={classes.InfoCardImage}>
          <img src={loading} alt='Know the real deal' ref={imageRef} />
        </div>
      )}
      {showTitle && (
        <div className={classes.InfoCardText}>
          <h3>{header}</h3>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
