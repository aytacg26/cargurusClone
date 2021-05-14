import React, { useState, useEffect, useRef } from 'react';
import classes from './CarBodyCard.module.css';
import { FaCheckCircle } from 'react-icons/fa';
import loading from '../../../../assets/images/BodyStyles/ajax-loader.gif';
import { loadImage } from '../../../../utils/utilsFuncs';

const CarBodyCard = ({ title, image, onSelect, selected }) => {
  const hoverableClass = `${classes.Hover} ${selected ? classes.selected : ''}`;
  const [showTitle, setShowTitle] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    loadImage(image, imageRef.current, setShowTitle);
  }, [image]);

  return (
    <div className={classes.CarBodyCard}>
      <img src={loading} alt={title} title={title} ref={imageRef} />
      {showTitle && <span>{title}</span>}
      <span className={hoverableClass} onClick={onSelect}>
        {selected && (
          <FaCheckCircle color='#0277bd' style={{ margin: '4px' }} />
        )}
      </span>
    </div>
  );
};

export default CarBodyCard;
