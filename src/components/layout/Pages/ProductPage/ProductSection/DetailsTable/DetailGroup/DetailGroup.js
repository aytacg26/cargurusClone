import React from 'react';
import classes from './DetailGroup.module.scss';

const DetailGroup = ({ label, data }) => {
  let dataContent;

  if (typeof data === 'string') {
    dataContent = <p>{data}</p>;
  } else if (typeof data === 'object' && Array.isArray(data)) {
    dataContent = data.map((datum, index) => (
      <span key={`${datum}-${index}`}>{datum}</span>
    ));
  } else {
    return null;
  }

  return (
    <div className={classes.DetailGroup}>
      <label>{label}</label>
      <div className={classes.DetailData}>{dataContent}</div>
    </div>
  );
};

export default DetailGroup;
