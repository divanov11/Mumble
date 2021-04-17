import React from 'react';

const Message = ({ variant, children }) => {
  return (
    <div className={`message message--${variant}`} variant={variant}>
      {children}
    </div>
  );
};

export default Message;
