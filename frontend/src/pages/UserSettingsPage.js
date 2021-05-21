import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RoundShape, TextBlock } from 'react-placeholder/lib/placeholders';
import '../styles/components/UserSettingsPage.css';
import { listUserDetails } from '../actions/userActions';
import { Avatar, Button, Card } from '../common';
import { Page, ProfilePicCropperModal, UserSettingUpdateModal } from '../components';
import { apiEndpointURL } from '../services/config';
import { toggleTheme as DarkLightTheme } from '../actions/local';

function UserSettingsPage() {
  const isDarkTheme = useSelector((state) => state.local.darkTheme);
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.auth.user);
  const currentUser = useSelector((state) => state.userProfileDetail);
  const profilePic = currentUser?.user?.profile_pic;
  const [updateModelActive, setUpdateModelActive] = useState(false);
  const [profilePicModel, setProfilePicModel] = useState(false);
  const [modelContent, setModelContent] = useState(null);
  const [profilePicSrc, setProfilePicSrc] = useState(null);
  const inputRef = useRef();

  const [croppedImageBase64, setCroppedImageBase64] = useState(apiEndpointURL + '/' + profilePic);

  useEffect(() => {
    if (username) {
      dispatch(listUserDetails(username));
    }
  }, [dispatch, username]);

  useEffect(() => {
    setCroppedImageBase64(apiEndpointURL + '/' + profilePic);
  }, [profilePic]);

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
    // inputRef.current.value = null;
  };

  const renderSkills = () => {
    const skills = currentUser?.user?.skills.map((x, i) => {
      return (
        <div className="tag" key={i}>
          <small>{x}</small>
        </div>
      );
    });
    return skills;
  };

  return (
    <>
      {currentUser?.user?.name && (
        <>
          <UserSettingUpdateModal
            heading="Update User Settings"
            dataType={modelContent}
            userData={currentUser?.user}
            // setUserData={setCurrentUser}
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
            // setCurrentUser={setCurrentUser}
          />
        </>
      )}

      <Page>
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
                {!currentUser?.loading ? (
                  <p>{currentUser?.user?.bio}</p>
                ) : (
                  <TextBlock rows={2} color="#c5c5c5" />
                )}
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
                <div className="tags-wrapper">
                  {currentUser?.loading ? (
                    <div className="settings-update-tag-placeholder__info">
                      <TextBlock
                        rows={1}
                        color="#c5c5c5"
                        style={{ width: 55 }}
                        className="settings-update-tag_placeholder"
                      />
                      <TextBlock
                        rows={1}
                        color="#c5c5c5"
                        style={{ width: 70 }}
                        className="settings-update-tag_placeholder"
                      />
                      <TextBlock
                        rows={1}
                        color="#c5c5c5"
                        style={{ width: 60 }}
                        className="settings-update-tag_placeholder"
                      />
                      <TextBlock
                        rows={1}
                        color="#c5c5c5"
                        style={{ width: 75 }}
                        className="settings-update-tag_placeholder"
                      />
                    </div>
                  ) : (
                    renderSkills()
                  )}
                </div>
              </div>
            </div>

            <div className="settings-update">
              <div className="settings-update__title">
                <span>Dark Theme ({isDarkTheme ? 'enabled' : 'disabled'})</span>
              </div>
              <label className="toggle-theme-switch">
                <input
                  defaultChecked={isDarkTheme}
                  type="checkbox"
                  onClick={() => {
                    dispatch(DarkLightTheme());
                  }}
                ></input>
                <span className="theme-slider"></span>
              </label>
            </div>
          </Card>
        </section>
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
                {!currentUser?.loading && croppedImageBase64 !== undefined ? (
                  <>
                    <Avatar size="lg" src={croppedImageBase64} />
                    <h4>{currentUser?.user?.name}</h4>
                    <small>{currentUser?.user?.email || 'tempemail@mumble.dev'}</small>
                    <small>@{currentUser?.user?.username}</small>
                    <p>Newyork, USA</p>
                  </>
                ) : (
                  <div className="settings-update__infoplaceholder">
                    <RoundShape
                      color="#c5c5c5"
                      className="avatar settings-update-image__infoplaceholder"
                    />
                    <TextBlock rows={1} color="#c5c5c5" style={{ fontSize: '30px', width: 150 }} />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <TextBlock
                        rows={1}
                        color="#c5c5c5"
                        style={{ width: 250, marginBottom: '10px' }}
                      />
                      <TextBlock rows={1} color="#c5c5c5" style={{ width: 150 }} />
                    </div>
                    <TextBlock rows={1} color="#c5c5c5" style={{ width: 170 }} />
                  </div>
                )}

                <div className="settings-update__avatar">
                  <input
                    type="file"
                    accept="image/*"
                    id="profile-pic"
                    name="profile-pic"
                    onChange={handleFileChange}
                    ref={inputRef}
                  />
                  <Button
                    style={{ pointerEvents: 'none' }}
                    text="Update Avatar"
                    iconName="camera"
                  />
                </div>
              </div>
            </div>
          </Card>
        </section>
      </Page>
    </>
  );
}

export default UserSettingsPage;
