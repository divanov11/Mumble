import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../styles/components/UserSettings.css';

import { Avatar, Button, Card } from '../common';
import { ProfilePicCropperModal, UserSettingUpdateModal } from '../components';
import { usersData } from '../data';
import { toggleTheme as DarkLightTheme } from '../actions/local';

function UserSettingsPage() {
  const isDarkTheme = useSelector((state) => state.local.darkTheme);
  const toggleTheme = useDispatch();

  const [currentUser, setCurrentUser] = useState(usersData[0]);
  const [updateModelActive, setUpdateModelActive] = useState(false);
  const [profilePicModel, setProfilePicModel] = useState(false);
  const [modelContent, setModelContent] = useState(null);
  const [profilePicSrc, setProfilePicSrc] = useState(null);
  const inputRef = useRef();

  const [croppedImageBase64, setCroppedImageBase64] = useState(currentUser.profile_pic);

  const update = (e) => {
    const data_type = e.target.dataset.type;
    setModelContent(data_type);
    setUpdateModelActive(true);
  };

  const handleFileChange = (e) => {
    const imageBlob = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imageBlob);
    reader.onloadend = () => {
      setProfilePicSrc(reader.result);
    };
    setProfilePicModel(true);
  };
  const clearFileInputOnCancel = () => {
    setProfilePicSrc(null);
    inputRef.current.value = null;
  };

  const renderSkills = () => {
    const skills = currentUser.skills.map((x, i) => {
      return (
        <div className="tag" key={i}>
          <small>{x}</small>
        </div>
      );
    });
    return skills;
  };
  return (
    <div className="container settings--layout">
      <UserSettingUpdateModal
        heading="Update User Settings"
        dataType={modelContent}
        userData={currentUser}
        setUserData={setCurrentUser}
        active={updateModelActive}
        setActive={setUpdateModelActive}
      />
      <ProfilePicCropperModal
        heading="Change Profile Picture"
        active={profilePicModel}
        setActive={setProfilePicModel}
        profilePicSrc={profilePicSrc}
        setProfilePicSrc={setProfilePicSrc}
        setCroppedImageBase64={setCroppedImageBase64}
        clearFileInputOnCancel={clearFileInputOnCancel}
        setCurrentUser={setCurrentUser}
      />
      <section>
        <Card>
          <div className="settings-update settings-update--profile">
            <div className="settings-update__title">
              <span>User Information</span>
              <Button
                iconName="pencil-alt"
                text="Edit"
                color="main"
                link
                onClick={update}
                data-type="user-info"
              />
            </div>

            <div className="settings-update__info">
              <Avatar size="lg" src={croppedImageBase64} />
              <h4>{currentUser.name}</h4>
              <small>{currentUser.email}</small>
              <small>@{currentUser.username}</small>
              <p>Newyork, USA</p>

              <div className="settings-update__avatar">
                <input
                  type="file"
                  accept="image/*"
                  id="profile-pic"
                  name="profile-pic"
                  onChange={handleFileChange}
                  ref={inputRef}
                />
                <Button style={{ pointerEvents: 'none' }} text="Update Avatar" iconName="camera" />
              </div>
            </div>
          </div>
        </Card>
      </section>
      <section>
        <Card>
          <div className="settings-update">
            <div className="settings-update__title">
              <span>About</span>
              <Button
                iconName="pencil-alt"
                text="Edit"
                color="main"
                link
                onClick={update}
                data-type="user-bio"
              />
            </div>
            <div className="settings-update__info">
              <p>{currentUser.bio}</p>
            </div>
          </div>

          <div className="settings-update">
            <div className="settings-update__title">
              <span>Skills</span>
              <Button
                iconName="pencil-alt"
                text="Edit"
                color="main"
                link
                onClick={update}
                data-type="user-skills"
              />
            </div>
            <div className="settings-update__info">
              <div className="tags-wrapper">{renderSkills()}</div>
            </div>
          </div>

          <div className="settings-update">
            <div className="settings-update__title">
              <span>Theme</span>
            </div>
            <label className="toggle-theme-switch">
              <input
                type="checkbox"
                onClick={() => {
                  toggleTheme(DarkLightTheme());
                }}
                checked={isDarkTheme}
              ></input>
              <span className="theme-slider"></span>
            </label>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default UserSettingsPage;
