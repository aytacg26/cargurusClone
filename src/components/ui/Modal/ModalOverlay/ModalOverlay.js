import React, { Fragment } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './ModalOverlay.module.css';

const ModalOverlay = ({ children, onClick, hide }) => {
  const modalClass = `${classes.ModalOverlay} ${!hide ? classes.Show : ''}`;

  return (
    <Fragment>
      <Backdrop hide={hide} onClick={onClick} />
      <div className={modalClass}>{children}</div>
    </Fragment>
  );
};

export default ModalOverlay;
