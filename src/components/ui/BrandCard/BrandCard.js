import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { loadImage } from '../../../utils/utilsFuncs';
import classes from './BrandCard.module.css';
import imageLoader from '../../../assets/images/BodyStyles/ajax-loader.gif';

const BrandCard = ({ brand, id, logo, company }) => {
  const imageRef = useRef();

  useEffect(() => {
    loadImage(logo, imageRef.current);
  }, [logo]);

  return (
    <Link to={`/brandcars/${brand}/${id}`} className={classes.BrandCard}>
      <div className={classes.ImageSection}>
        <img
          src={imageLoader}
          alt={brand}
          title={brand}
          width='140'
          height='140'
          ref={imageRef}
        />
      </div>
      <div className={classes.textSection}>
        <h3>{brand}</h3>
        <span>{company}</span>
      </div>
    </Link>
  );
};

export default BrandCard;
