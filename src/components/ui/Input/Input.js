import React from 'react';
import classes from './Input.module.scss';

const Input = (props) => {
  const label = props.label;
  const warningMessage = props.errorMessage;
  const notValid = props.notValid;
  const textError = props.useTextError;
  const inputProps = { ...props };
  delete inputProps.label;
  delete inputProps.notValid;
  delete inputProps.errorMessage;
  delete inputProps.useTextError;

  const inputClass = `${classes.Input} ${notValid ? classes.NotValid : ''}`;
  const warningClass = `${classes.WarningContainer} ${
    notValid ? classes.Show : ''
  }`;

  return (
    <label>
      <input
        {...inputProps}
        className={inputClass}
        autoComplete='off'
        placeholder={label ? '' : inputProps.placeholder}
      />
      {label && (
        <span
          className={`${classes.Label} ${props.value ? classes.filled : ''} ${
            notValid ? classes.NotValid : ''
          }`}
        >
          {label}
        </span>
      )}
      {textError && notValid && (
        <span className={classes.TextError}>{warningMessage}</span>
      )}
      {warningMessage && !textError && (
        <div className={warningClass}>
          <span className={classes.Triangle}></span>
          <div className={classes.Warning}>{warningMessage}</div>
        </div>
      )}
    </label>
  );
};

export default Input;
