import React from 'react';
import classes from './ProductSection.module.css';

const ProductSection = () => {
  return (
    <div className={classes.ProductSection}>
      <div className={classes.ImageBox}>ImageBox</div>
      <div>Product Summary and Details</div>
      <span>Gallery Contact Details</span>
      <div id='reviews'>Reviews</div>
    </div>
  );
};

export default ProductSection;
