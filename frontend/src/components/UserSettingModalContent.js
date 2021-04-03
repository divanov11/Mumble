const UserSettingModalContent = ({
  closeModal,
  children,
  handleFormSubmit,
}) => {
  const HandlecloseModal = (e) => {
    e.preventDefault();
    closeModal(false);
  };
  const submit = (e) => {
    e.preventDefault();
    handleFormSubmit(e);
    closeModal(false);
  };
  return (
    <form onSubmit={submit}>
      {children}
      <div className="modal-actions">
        <button className="btn btn-1 btn-md" style={{ marginRight: '8px' }}>
          Update
        </button>
        <button className="btn btn-1 btn-md" onClick={HandlecloseModal}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UserSettingModalContent;
