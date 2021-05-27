import React, { Fragment, useEffect } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './ModalOverlay.module.scss';

const ModalOverlay = ({ children, onClick, hide, modalStyle }) => {
  const modalClass = `${classes.ModalOverlay} ${!hide ? classes.Show : ''}`;

  useEffect(() => {
    if (!hide) {
      document.scrollingElement.scrollTop = 0;
      document.body.setAttribute('style', 'overflow:hidden');
    } else {
      document.body.removeAttribute('style', 'overflow:hidden');
    }
  }, [hide]);

  useEffect(() => {
    if (!hide) {
      const closeModalByEsc = (e) => {
        if (e.key === 'Escape') {
          onClick();
        }
      };

      document.addEventListener('keyup', closeModalByEsc);

      return () => {
        document.removeEventListener('keyup', closeModalByEsc);
      };
    }
  }, [onClick, hide]);

  return (
    <Fragment>
      <Backdrop hide={hide} onClick={onClick} />
      <div className={modalClass} style={modalStyle}>
        {children}
      </div>
    </Fragment>
  );
};

export default ModalOverlay;
