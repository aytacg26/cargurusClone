import React from 'react';
import { createPortal } from 'react-dom';
import ModalOverlay from './ModalOverlay/ModalOverlay';

const Modal = ({ children, onClick, hide }) => {
  const content = (
    <ModalOverlay onClick={onClick} hide={hide}>
      {children}
    </ModalOverlay>
  );

  return createPortal(content, document.getElementById('modal-root'));
};

export default Modal;
