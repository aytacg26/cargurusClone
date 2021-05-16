import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classes from './ProductCard.module.css';
import imageLoader from '../../../assets/images/BodyStyles/ajax-loader.gif';
import { loadImage } from '../../../utils/utilsFuncs';
import CardText from './CardText';

const ProductCard = ({ id, image, header, author, text }) => {
  const imageRef = useRef();

  useEffect(() => {
    loadImage(image, imageRef.current);
  }, [image]);

  return (
    <Link to={`/articles/${id}`} className={classes.ProductCard}>
      <div className={classes.ImageSection}>
        <img
          src={imageLoader}
          alt={header}
          title={`${header} - ${author}`}
          ref={imageRef}
        />
      </div>
      <CardText header={header} author={author} text={text} />
    </Link>
  );
};

export default ProductCard;
