import React from 'react';
import { createPortal } from 'react-dom';
import ModalOverlay from './ModalOverlay/ModalOverlay';

const Modal = ({ children, onClick, hide, modalStyle }) => {
  const content = (
    <ModalOverlay onClick={onClick} hide={hide} modalStyle={modalStyle}>
      {children}
    </ModalOverlay>
  );

  return createPortal(content, document.getElementById('modal-root'));
};

export default Modal;
