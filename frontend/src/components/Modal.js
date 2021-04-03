import ReactDom from 'react-dom';
import { useRef } from 'react';
import '../styles/components/Modal.css';
const Modal = ({ heading, children, active, setActive }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    e.stopPropagation();
    setActive(false);
  };
  const toggleOn = () => {
    modalRef.current.style.display = 'flex';
  };
  const toggleOn1 = () => {
    modalRef.current.style.opacity = '1';
  };
  const toggleOff = () => {
    if (modalRef.current) {
      modalRef.current.style.opacity = '0';
    }
  };
  const toggleOff1 = () => {
    if (modalRef.current) {
      modalRef.current.style.display = 'none';
    }
  };
  return ReactDom.createPortal(
    <div className="modal-backdrop" ref={modalRef}>
      <div style={{ display: 'none' }}>
        {active ? toggleOn() : toggleOff()}
        {active ? setTimeout(toggleOn1, 30) : setTimeout(toggleOff1, 200)}
      </div>
      <div className="mumble-modal" onClick={(e) => e.stopPropagation()}>
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
