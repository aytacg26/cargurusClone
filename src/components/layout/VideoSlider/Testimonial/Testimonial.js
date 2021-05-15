import React from 'react';
import classes from './Testimonial.module.css';

const Testimonial = ({ header, testimonial, name }) => {
  return (
    <div className={classes.Testimonies}>
      <h4>{header}</h4>

      <h3>{testimonial}</h3>

      <h2>{name}</h2>
    </div>
  );
};

export default Testimonial;
