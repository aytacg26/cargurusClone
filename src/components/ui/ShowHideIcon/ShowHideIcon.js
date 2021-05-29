import React from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

const ShowHideIcon = ({ show, onClick, style }) => {
  return (
    <span>
      {!show ? (
        <BsEyeFill
          title='Show All'
          color='blue'
          style={style}
          onClick={onClick}
        />
      ) : (
        <BsEyeSlashFill
          title='Hide'
          color='red'
          style={style}
          onClick={onClick}
        />
      )}
    </span>
  );
};

export default ShowHideIcon;
