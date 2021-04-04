import ModalContentAction from '../common/ModalContentAction';
const UserSettingModalContent = ({
  closeModal,
  children,
  handleFormSubmit,
}) => {
  const submit = (e) => {
    e.preventDefault();
    handleFormSubmit(e);
    closeModal(false);
  };
  return (
    <form onSubmit={submit}>
      {children}
      <ModalContentAction setActive={closeModal} />
    </form>
  );
};

export default UserSettingModalContent;
