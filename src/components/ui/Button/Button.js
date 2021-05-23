import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Button.module.css';

const Button = ({
  type,
  color,
  textColor,
  children,
  onClick,
  btnType,
  to,
  style,
  disabled,
}) => {
  const btnClass = `${classes.btn} ${
    btnType && !disabled && classes[btnType.toLowerCase()]
  } ${disabled ? classes.disabled : ''}`;

  if (to) {
    return (
      <Link to={to} className={btnClass}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={btnClass}
      type={type}
      onClick={onClick}
      style={{ backgroundColor: color, color: textColor, ...style }}
    >
      {children}
    </button>
  );
};

export default Button;
