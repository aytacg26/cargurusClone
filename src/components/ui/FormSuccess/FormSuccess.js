import React from 'react';
import SuccessErrorSign from '../SuccessSign/SuccessErrorSign';
import classes from './FormSuccess.module.scss';

const FormSuccess = ({ isError }) => {
  return (
    <div className={`${classes.Container} ${isError ? classes.Error : ''}`}>
      <h2>{isError ? `Error!` : `Message Send`}</h2>
      <SuccessErrorSign isError={isError} />
      {!isError && <h1>Successfully!</h1>}
      {isError && (
        <div className={classes.ErrorMessage}>
          <span>We are sorry, we couldn't send the message,</span>
          <span style={{ marginTop: '4px' }}>
            an unexpected error occured. Please try again later.
          </span>
        </div>
      )}
    </div>
  );
};

export default FormSuccess;
