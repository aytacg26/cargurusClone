import React, { useState, useEffect } from 'react';
import classes from './DetailGroup.module.scss';
import { FaWindowClose } from 'react-icons/fa';

const DetailGroup = ({ label, data }) => {
  const [zoomIn, setZoomIn] = useState(false);

  let dataContent;

  useEffect(() => {
    let timer;
    if (zoomIn) {
      timer = setTimeout(() => {
        setZoomIn(false);
      }, 6000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [zoomIn]);

  if (typeof data === 'string') {
    dataContent = <p>{data}</p>;
  } else if (typeof data === 'object' && Array.isArray(data)) {
    dataContent = data.map((datum, index) => (
      <span key={`${datum}-${index}`}>{datum}</span>
    ));
  } else {
    return null;
  }

  const handleZoom = () => {
    setZoomIn((prevState) => !prevState);
  };

  return (
    <div
      className={`${classes.DetailGroup} ${zoomIn ? classes.Zoom : ''}`}
      onClick={handleZoom}
    >
      {zoomIn && (
        <span className={classes.Close}>
          <FaWindowClose color='#fff' />
        </span>
      )}
      <label>{label}</label>
      <div className={classes.DetailData}>{dataContent}</div>
    </div>
  );
};

export default DetailGroup;
