import { useDispatch } from 'react-redux';
import UserSettingModalContent from './UserSettingModalContent';
import { Modal, ModalContentAction, TagInput } from '../common';
import { useForm } from '../hooks';
import { updateUserProfile, updateUserProfileSkills } from '../actions/userActions';
import { useState } from 'react';

const UserSettingUpdateModal = ({ heading, dataType, userData, active, setActive }) => {
  let dispatch = useDispatch();

  const [skills, setSkills] = useState(userData.skills);

  const [fields, handleFieldChanges] = useForm({
    name: userData.name,
    username: userData.username,
    bio: userData.bio,
    email: userData.email,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(fields));
  };

  const handleUpdateSkills = () => {
    dispatch(updateUserProfileSkills(skills));
    setActive(false);
  };

  const HandleTagFormSubmit = (e) => {
    e.preventDefault();
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
              placeholder="Enter your username"
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
              placeholder="Enter your email address"
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
            <TagInput tags={skills} setTags={setSkills} />
          </div>
          <ModalContentAction successAction={handleUpdateSkills} setActive={setActive} />
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
