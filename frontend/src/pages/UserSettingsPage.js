import React from 'react';
import '../styles/components/UserSettings.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import User from '../data/users';
import UserSettingUpdateModal from '../components/UserSettingUpdateModal';
import Avatar from '../common/Avatar';
function UserSettingsPage() {
  const [currentUser, setCurrentUser] = useState(User[0]);
  const [updateModelActive, setUpdateModelActive] = useState(false);
  const [modelContent, setModelContent] = useState(null);
  const update = (e) => {
    const data_type = e.target.dataset.type;
    setModelContent(data_type);
    setUpdateModelActive(true);
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
    <div id="settings-page-container">
      <UserSettingUpdateModal
        heading="Update User Settings"
        dataType={modelContent}
        userData={currentUser}
        setUserData={setCurrentUser}
        active={updateModelActive}
        setActive={setUpdateModelActive}
      />
      <section>
        <div className="card">
          <div className="card__body">
            <h6>Account Settings</h6>
            <div className="line-break"></div>
            <div id="settings-pic-wrapper">
              <Avatar size="larger" />
              <h5>{currentUser.name}</h5>
              <div className="line-break"></div>
              <Link to="" className="btn btn-1 btn-md">
                Update Picture
              </Link>
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
                  <div className="tags-wrapper">
                    {renderSkills()}
                    {/* <div className='tag'>
                                            <small>Python</small>
                                        </div>
                                        <div className='tag'>
                                            <small>Django</small>
                                        </div>
                                        <div className='tag'>
                                            <small>React</small>
                                        </div>
                                        <div className='tag'>
                                            <small>JavaScript</small>
                                        </div>
                                        <div className='tag'>
                                            <small>Node JS</small>
                                        </div>
                                        <div className='tag'>
                                            <small>Postgres</small>
                                        </div>
                                        <div className='tag'>
                                            <small>System Architecture</small>
                                        </div>
                                        <div className='tag'>
                                            <small>Security</small>
                                        </div> */}
                  </div>
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
