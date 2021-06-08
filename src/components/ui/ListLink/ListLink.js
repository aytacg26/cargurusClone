import React from 'react';
import { Link } from 'react-router-dom';

const ListLink = ({ text, link, children }) => {
  return (
    <li>
      <Link to={link}>{text}</Link>
      {children}
    </li>
  );
};

export default ListLink;
