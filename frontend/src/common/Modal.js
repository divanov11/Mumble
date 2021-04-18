import React from 'react';
import ReactDom from 'react-dom';
import { useEffect, useRef } from 'react';

import '../styles/components/Modal.css';

// TODO: Make it universal and modular

const Modal = ({ heading, children, active, setActive }) => {
  const modalRef = useRef();

  const closeModal = () => {
    setActive(false);
  };

  const MODAL_TRANSITION_TIME = 200;

  const fadeIn = (el) => {
    el.style.display = 'flex';
    setTimeout(() => {
      el.style.opacity = '1';
    }, 30);
  };

  const fadeOut = (el) => {
    el.style.opacity = '0';
    setTimeout(() => {
      el.style.display = 'none';
    }, MODAL_TRANSITION_TIME);
  };

  useEffect(() => {
    const modalEl = modalRef.current;
    active ? fadeIn(modalEl) : fadeOut(modalEl);
  }, [active]);

  return ReactDom.createPortal(
    <div className="modal-backdrop" ref={modalRef}>
      <div className="mumble-modal">
        <div className="modal-header">
          <h4>{heading}</h4>
          <div className="close-modal" onClick={closeModal}>
            <i className="fa fa-times close-icon" aria-hidden="true" />
          </div>
        </div>
        <div className="line-break"></div>
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    document.getElementById('modal'),
  );
};

export default Modal;
