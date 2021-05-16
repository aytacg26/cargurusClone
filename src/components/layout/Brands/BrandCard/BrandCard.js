import React from 'react';
import { Link } from 'react-router-dom';
import classes from './BrandCard.module.css';

const BrandCard = ({ brand, id, logo, company }) => {
  return (
    <Link to={`/brandcars/${brand}/${id}`} className={classes.BrandCard}>
      <div className={classes.ImageSection}>
        <img src={logo} alt={brand} title={brand} width='140' height='140' />
      </div>
      <div className={classes.textSection}>
        <h3>{brand}</h3>
        <span>{company}</span>
      </div>
    </Link>
  );
};

export default BrandCard;
