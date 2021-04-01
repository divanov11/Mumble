import Modal from './Modal';
import useForm from './useFormHook';

const ContentComponent = ({ closeModal, children, handleFormSubmit }) => {
  const HandlecloseModal = (e) => {
    e.preventDefault();
    closeModal(false);
  };
  const submit = (e) => {
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
const UserSettingUpdateModal = ({
  heading,
  dataType,
  userData,
  setUserData,
  active,
  setActive,
}) => {
  const [fields, handleFieldChanges] = useForm(userData);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!e.target.firstChild.dataset.error) {
      setUserData((state) => {
        return { ...state, ...fields };
      });
    }
  };
  const renderFormFields = () => {
    if (dataType === 'user-info') {
      return (
        <>
          <div className="form__field">
            <label htmlFor="formInput#text">Full Name: </label>

            <input
              className="input input--text"
              id="formInput#text"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={fields.name}
              onChange={handleFieldChanges}
              style={{ width: '100%', minWidth: 'auto' }}
            />
          </div>
          <div className="form__field">
            <label htmlFor="formInput#textarea">Bio: </label>
            <textarea
              className="input input--textarea"
              name="bio"
              id="formInput#textarea"
              placeholder="Write something awesome..."
              value={fields.bio}
              onChange={handleFieldChanges}
              style={{ width: '100%', minWidth: 'auto' }}
            ></textarea>
          </div>
        </>
      );
    } else if (dataType === 'user-detail') {
      return (
        <>
          <div className="form__field">
            <label htmlFor="formInput#text">UserName: </label>
            <input
              className="input input--text"
              id="formInput#text"
              type="text"
              name="username"
              placeholder="Enter your full name"
              value={fields.username}
              onChange={handleFieldChanges}
              style={{ width: '100%', minWidth: 'auto' }}
            />
          </div>
          <div className="form__field">
            <label htmlFor="formInput#text">Email: </label>
            <input
              className="input input--text"
              id="formInput#text"
              type="email"
              name="email"
              placeholder="Enter your full name"
              value={fields.email}
              onChange={handleFieldChanges}
              style={{ width: '100%', minWidth: 'auto' }}
            />
          </div>
        </>
      );
    } else if (dataType === 'user-skills') {
      return (
        <>
          <div className="form__field" data-error={dataType}>
            <label htmlFor="formInput#text">Tags</label>
            <input
              className="input input--text"
              id="formInput#text"
              type="text"
              name="skills"
              placeholder="Enter your full name"
              value={fields.skills}
              onChange={handleFieldChanges}
              style={{ width: '100%', minWidth: 'auto' }}
            />
          </div>
        </>
      );
    }
  };
  return (
    <Modal heading={heading} active={active} setActive={setActive}>
      <ContentComponent
        closeModal={setActive}
        handleFormSubmit={handleFormSubmit}
      >
        {renderFormFields()}
      </ContentComponent>
    </Modal>
  );
};

export default UserSettingUpdateModal;
