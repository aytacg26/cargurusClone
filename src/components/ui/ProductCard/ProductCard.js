import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classes from './ProductCard.module.css';
import imageLoader from '../../../assets/images/BodyStyles/ajax-loader.gif';
import { loadImage, textEllipsis } from '../../../utils/utilsFuncs';
import CardText from './CardText';

const ProductCard = ({
  url,
  image,
  header,
  subheading,
  price,
  author,
  text,
  year,
  isNew,
  noBoxShadow,
  subHeadingStyle,
}) => {
  const imageRef = useRef();
  const headerToUse = textEllipsis(header, 5);
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
      style={{ gridTemplateRows: text ? '' : '200px' }}
    >
      <div className={classes.ImageSection}>
        <img
          src={imageLoader}
          alt={header}
          title={`${header} - ${author || subheading || price}`}
          ref={imageRef}
        />
        {isNew && <span className={classes.New}>New</span>}
      </div>
      {!text && header && (
        <div className={classes.HeadingSubHeading} style={subHeadingStyle}>
          <h4>{headerToUse}</h4>
          <div className={classes.Subheading}>
            <h5>{subheading || `£${price}`}</h5>
            {year && (
              <span>
                <strong>Year :</strong> {year}
              </span>
            )}
          </div>
        </div>
      )}
      {text && <CardText header={header} author={author} text={text} />}
    </Link>
  );
};

export default ProductCard;
