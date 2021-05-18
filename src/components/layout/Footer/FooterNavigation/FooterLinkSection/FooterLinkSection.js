import React from 'react';
import { Link } from 'react-router-dom';
import classes from './FooterLinkSection.module.css';

const FooterLinkSection = ({ header, links }) => {
  return (
    <div className={classes.LinkSection}>
      <h3>{header}</h3>
      {links.map((link) => (
        <Link to={link.url} key={link.id}>
          {link.text}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinkSection;
