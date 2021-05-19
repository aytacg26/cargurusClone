import React from 'react';
import ProductCard from '../../../ui/ProductCard/ProductCard';
import classes from './RecentActivity.module.css';

const RecentActivity = ({
  id,
  activityHeading,
  cardHeader,
  subHeader,
  url,
  image,
}) => {
  return (
    <div className={classes.RecentActivity}>
      <span>{activityHeading}</span>
      <ProductCard
        id
        noBoxShadow
        url={url}
        image={image}
        header={cardHeader}
        subheading={subHeader}
      />{' '}
    </div>
  );
};

export default RecentActivity;
