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
}) => {
  const btnClass = `${classes.btn} ${
    btnType && classes[btnType.toLowerCase()]
  }`;

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
