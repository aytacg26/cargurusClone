import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../../../utils/utilsFuncs';
import classes from './MenuItem.module.scss';

const MenuItem = ({
  title,
  link,
  image,
  icon,
  onClick,
  date,
  isChecked,
  style,
}) => {
  let content = null;
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    if (date) {
      const forDate = date ? formatDate(date) : '';
      setFormattedDate(forDate);
    }
  }, [date]);

  if (link) {
    content = (
      <Link to={link} className={classes.Link} onClick={onClick}>
        <div className={classes.IconTextSection}>
          {image && (
            <span className={classes.linkImage}>
              <img src={image} alt={title} />
            </span>
          )}
          {icon && (
            <span
              className={`${classes.linkImage} ${
                !isChecked ? classes.active : ''
              }`}
            >
              {icon}
            </span>
          )}
          <span className={classes.MenuTitle} style={style} title={title}>
            {title}
          </span>
        </div>
        {date && <span className={classes.Date}>{formattedDate}</span>}
      </Link>
    );
  } else if (onClick) {
    content = (
      <button className={classes.ItemButton} onClick={onClick}>
        <div className={classes.IconTextSection}>
          {image && (
            <span className={classes.linkImage}>
              <img src={image} alt={title} />
            </span>
          )}
          {icon && (
            <span
              className={`${classes.linkImage} ${
                !isChecked ? classes.active : ''
              }`}
            >
              {icon}
            </span>
          )}
          <span className={classes.MenuTitle} style={style} title={title}>
            {title}
          </span>
        </div>
        {date && <span>{formattedDate}</span>}
      </button>
    );
  }

  return content;
};

export default MenuItem;
