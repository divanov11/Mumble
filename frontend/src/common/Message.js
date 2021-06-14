import React from 'react';

const Message = ({ onClose, variant, dismissible, children }) => {
  return (
    <div className={`message message--${variant}`} variant={variant}>
      {children}
      {dismissible && <div onClick={onClose}>✕</div>}
    </div>
  );
};

export default Message;
