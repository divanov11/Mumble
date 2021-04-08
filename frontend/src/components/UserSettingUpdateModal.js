import { useRef } from 'react';

import UserSettingModalContent from './UserSettingModalContent';
import { Modal, ModalContentAction, TagInput } from '../common';
import { useForm } from '../hooks';

const UserSettingUpdateModal = ({
  heading,
  dataType,
  userData,
  setUserData,
  active,
  setActive,
}) => {
  const [fields, handleFieldChanges] = useForm(userData);
  const tagList = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!e.target.firstChild.dataset.error) {
      setUserData((state) => {
        return { ...state, ...fields };
      });
    }
  };

  const HandleTagFormSubmit = (e) => {
    e.preventDefault();
    const tags = tagList.current;

    if (tags) {
      setUserData((data) => {
        data.skills = tags;
        return data;
      });
    }
    setActive(false);
  };

  const preventSubmission = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const renderFormFields = () => {
    if (dataType === 'user-bio') {
      return (
        <UserSettingModalContent closeModal={setActive} handleFormSubmit={handleFormSubmit}>
          <div className="form__field">
            <label htmlFor="formInput#textarea">About: </label>
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
        </UserSettingModalContent>
      );
    } else if (dataType === 'user-info') {
      return (
        <UserSettingModalContent closeModal={setActive} handleFormSubmit={handleFormSubmit}>
          <div className="form__field">
            <label htmlFor="formInput#text">Username: </label>
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
        </UserSettingModalContent>
      );
    } else if (dataType === 'user-skills') {
      return (
        <form onSubmit={HandleTagFormSubmit} onKeyPress={preventSubmission}>
          <div className="form__field" data-error={dataType}>
            <label htmlFor="formInput#text">Tags</label>
            <TagInput userData={userData} tagListRef={tagList} />
          </div>
          <ModalContentAction setActive={setActive} />
        </form>
      );
    }
  };
  return (
    <Modal heading={heading} active={active} setActive={setActive}>
      {renderFormFields()}
    </Modal>
  );
};

export default UserSettingUpdateModal;
