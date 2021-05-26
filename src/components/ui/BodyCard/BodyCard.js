import React, { useState, useEffect, useRef, Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './BodyCard.module.scss';
import { FaCheckCircle } from 'react-icons/fa';
import loading from '../../../assets/images/BodyStyles/ajax-loader.gif';
import { loadImage } from '../../../utils/utilsFuncs';

const BodyCard = ({
  title,
  image,
  onSelect,
  selected,
  to,
  style,
  noBorder,
  noImage,
  width,
  height,
  onClick,
  iconComponent,
}) => {
  const hoverableClass = `${classes.Hover} ${selected ? classes.selected : ''}`;
  const [showTitle, setShowTitle] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    if (!noImage) {
      loadImage(image, imageRef.current, setShowTitle);
    } else {
      setShowTitle(true);
    }
  }, [image, noImage]);

  const content = (
    <Fragment>
      {!noImage && (
        <img src={loading} alt={title} title={title} ref={imageRef} />
      )}
      {showTitle && (
        <Fragment>
          <span>{title}</span>
          {iconComponent ? iconComponent : null}
          <span
            className={hoverableClass}
            onClick={onSelect}
            style={{
              border: noBorder ? '0 none' : '',
              width,
              height,
            }}
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
    <Link
      to={to}
      className={classes.CarBodyCard}
      style={{ ...style, width, height }}
    >
      {content}
    </Link>
  ) : (
    <div
      className={classes.CarBodyCard}
      style={{ ...style, width, height }}
      onClick={onClick}
    >
      {content}
    </div>
  );
};

export default React.memo(BodyCard);
