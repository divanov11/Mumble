import React from 'react';
import '../styles/components/UserSettings.css';
import { useState, useRef } from 'react';
import User from '../data/users';
import UserSettingUpdateModal from '../components/UserSettingUpdateModal';
import Avatar from '../common/Avatar';
import ProfilePicCropperModel from '../components/ProfilePicCropperModel'
function UserSettingsPage() {
  const [currentUser, setCurrentUser] = useState(User[0]);
  const [updateModelActive, setUpdateModelActive] = useState(false);
  const [profilePicModel, setProfilePicModel] = useState(false)
  const [modelContent, setModelContent] = useState(null);
  // input File change value state convert file to Base64 to extract file extension
  const [profilePicSrc, setProfilePicSrc] = useState(null);
  // CroppedImageBase64 to display profile change before uploading to server
  const [croppedImageBase64, setCroppedImageBase64] = useState(currentUser.profile_pic)
  const inputRef = useRef()


  const update = (e) => {
    const data_type = e.target.dataset.type;
    setModelContent(data_type);
    setUpdateModelActive(true);
  };
  // On File change get first file and convert it into a Base64 Data and save it in state 
  const handleFileChange = (e) => {
      const imageBlob = e.target.files[0]
      let reader = new FileReader();
      reader.readAsDataURL(imageBlob)
      reader.onloadend = () => {
        setProfilePicSrc(reader.result)
      }
      setProfilePicModel(true)
  }
  const clearFileInputOnCancel = () => {
      setProfilePicSrc(null)
      inputRef.current.value = null
  }


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
    <div id="settings-page-container">
      <UserSettingUpdateModal
        heading="Update User Settings"
        dataType={modelContent}
        userData={currentUser}
        setUserData={setCurrentUser}
        active={updateModelActive}
        setActive={setUpdateModelActive}
      />
      <ProfilePicCropperModel heading="Change Profile Picture" active={profilePicModel} setActive={setProfilePicModel} profilePicSrc={profilePicSrc} setProfilePicSrc={setProfilePicSrc} setCroppedImageBase64={setCroppedImageBase64} clearFileInputOnCancel={clearFileInputOnCancel} setCurrentUser={setCurrentUser}/>
      <section>
        <div className="card">
          <div className="card__body">
            <h6>Account Settings</h6>
            <div className="line-break"></div>
            <div id="settings-pic-wrapper">
              <Avatar size="lg" src={currentUser.profile_pic}/>
              <h5>{currentUser.name}</h5>
              <div className="line-break"></div>
              {/* <Link to="" className="btn btn-1 btn-md">
                Update Picture
              </Link> */}
              <div className="btn btn-1 btn-md profile-update-btn">
              <div style={{cursor: 'pointer'}}>
                <input
                  type="file"
                  accept="image/*"
                  id="profile-pic"
                  name="profile-pic"
                  onChange={handleFileChange} ref={inputRef}
                /></div>
                <span>
                  <i className="fas fa-camera" />
                  Update Picture
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="card">
          <div className="card__body">
            <div className="card card--dark">
              <div className="card__body">
                <h6>
                  User Information{' '}
                  <span
                    onClick={update}
                    data-type="user-info"
                    className="user-setting-edit"
                  >
                    Edit
                  </span>
                </h6>
                <div className="line-break line-break-2"></div>
                <p>Name: {currentUser.name}</p>
                <p>Bio: {currentUser.bio}</p>
                <p>Location: {currentUser.name}</p>
              </div>
            </div>

            <div className="card card--dark">
              <div className="card__body">
                <h6>
                  Username{' '}
                  <span
                    data-type="user-detail"
                    onClick={update}
                    className="user-setting-edit"
                  >
                    Edit
                  </span>
                </h6>
                <div className="line-break line-break-2"></div>
                <p>Username: {currentUser.username}</p>
                <p>Email: {currentUser.email}</p>
              </div>
            </div>

            <div className="card card--dark">
              <div className="card__body">
                <h6>
                  Skills{' '}
                  <span
                    data-type="user-skills"
                    className="user-setting-edit"
                    onClick={update}
                  >
                    Edit
                  </span>
                </h6>
                <div className="line-break line-break-2"></div>
                <div id="topics-wrapper" className="card__body">
                  <div className="tags-wrapper">{renderSkills()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section></section> */}
    </div>
  );
}

export default UserSettingsPage;
