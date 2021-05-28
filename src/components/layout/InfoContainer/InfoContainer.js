import React from 'react';
import InfoCards from '../InfoCards/InfoCards';
import classes from './InfoContainer.module.scss';

const InfoContainer = ({ heading }) => {
  return (
    <div className={classes.InfoContainer}>
      <h2>{heading}</h2>
      <InfoCards />
      <p>
        Finance in Advance is a product of CarGurus, Inc. Subject to final
        agreement between you & dealership. Financing not completed on site.
        Pre-qualification and rates subject to your acceptance and satisfaction
        of terms and conditions of participating lender.
      </p>
    </div>
  );
};

export default InfoContainer;
