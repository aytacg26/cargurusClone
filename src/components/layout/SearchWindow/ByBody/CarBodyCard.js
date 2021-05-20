import React, { useState, useEffect, useRef, Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './CarBodyCard.module.css';
import { FaCheckCircle } from 'react-icons/fa';
import loading from '../../../../assets/images/BodyStyles/ajax-loader.gif';
import { loadImage } from '../../../../utils/utilsFuncs';

const CarBodyCard = ({
  title,
  image,
  onSelect,
  selected,
  to,
  style,
  noBorder,
}) => {
  const hoverableClass = `${classes.Hover} ${selected ? classes.selected : ''}`;
  const [showTitle, setShowTitle] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    console.log('CarBodyCard running');
    loadImage(image, imageRef.current, setShowTitle);
  }, [image]);

  const content = (
    <Fragment>
      <img src={loading} alt={title} title={title} ref={imageRef} />
      {showTitle && (
        <Fragment>
          <span>{title}</span>
          <span
            className={hoverableClass}
            onClick={onSelect}
            style={{ border: noBorder ? '0 none' : '' }}
          >
            {selected && (
              <FaCheckCircle color='#0277bd' style={{ margin: '4px' }} />
            )}
          </span>
        </Fragment>
      )}
    </Fragment>
  );

  return to ? (
    <Link to={to} className={classes.CarBodyCard} style={style}>
      {content}
    </Link>
  ) : (
    <div className={classes.CarBodyCard} style={style}>
      {content}
    </div>
  );
};

export default React.memo(CarBodyCard);
