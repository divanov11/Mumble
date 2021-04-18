import React from 'react';

// TODO: Make it universal and modular

const ModalContentAction = ({ setActive, successAction }) => {
  const handleCancel = (e) => {
    e.preventDefault();
    setActive(false);
  };

  const handleSuccess = () => {
    if (typeof successAction === 'function') {
      console.log('Success');
      successAction();
    }
  };

  return (
    <div className="modal-actions">
      <button
        className="btn btn-1 btn-md"
        style={{ marginRight: '8px' }}
        onClick={() => handleSuccess()}
      >
        Update
      </button>
      <button className="btn btn-1 btn-md" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
};

export default ModalContentAction;
