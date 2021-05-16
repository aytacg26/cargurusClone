import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classes from './ProductCard.module.css';
import imageLoader from '../../../assets/images/BodyStyles/ajax-loader.gif';
import { loadImage } from '../../../utils/utilsFuncs';
import CardText from './CardText';

const ProductCard = ({
  url,
  image,
  header,
  subheading,
  author,
  text,
  noBoxShadow,
}) => {
  const imageRef = useRef();

  const cardClass = `${classes.ProductCard} ${
    noBoxShadow ? classes.NoBoxShadow : ''
  }`;

  useEffect(() => {
    loadImage(image, imageRef.current);
  }, [image]);

  return (
    <Link
      to={url}
      className={cardClass}
      style={{ gridTemplateRows: text ? '' : '300px' }}
    >
      <div className={classes.ImageSection}>
        <img
          src={imageLoader}
          alt={header}
          title={`${header} - ${author}`}
          ref={imageRef}
        />
      </div>
      {!text && header && (
        <div className={classes.HeadingSubHeading}>
          <h4>{header}</h4>
          <h5>{subheading}</h5>
        </div>
      )}
      {text && <CardText header={header} author={author} text={text} />}
    </Link>
  );
};

export default ProductCard;
