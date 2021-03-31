import React from 'react';
import '../Css/UserSettings.css';

function UserSettingsPage() {
  return (
    <div id="settings-page-container">
      <section>
        <div className="card">
          <div className="card-body">
            <h6>Account Settings</h6>
            <div className="line-break"></div>
            <div id="settings-pic-wrapper">
              <img
                alt="img-description"
                className="user-thumbnail user-thumbnail-lg"
                src="https://randomuser.me/api/portraits/men/52.jpg"
              />
              <h5>Sam Wick</h5>
              <div className="line-break"></div>
              <a className="btn btn-1 btn-sm">Update Picture</a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="card">
          <div className="card-body">
            <div className="card card-dark">
              <div className="card-body">
                <h6>
                  User Information <a href="#">Edit</a>
                </h6>
                <div className="line-break line-break-2"></div>
                <p>Name: Sam Wick</p>
                <p>
                  Bio: I was a lead developer in a past life, now I enjoy teaching others how to
                  build cool applications.
                </p>
                <p>Location: Sam Wick</p>
              </div>
            </div>

            <div className="card card-dark">
              <div className="card-body">
                <h6>
                  Username <a href="#">Edit</a>
                </h6>
                <div className="line-break line-break-2"></div>
                <p>Username: @realsamwick</p>
              </div>
            </div>

            <div className="card card-dark">
              <div className="card-body">
                <h6>
                  Skills <a href="#">Edit</a>
                </h6>
                <div className="line-break line-break-2"></div>
                <div id="topics-wrapper" className="card-body">
                  <div className="tags-wrapper">
                    <div className="tag">
                      <small>Python</small>
                    </div>
                    <div className="tag">
                      <small>Django</small>
                    </div>
                    <div className="tag">
                      <small>React</small>
                    </div>
                    <div className="tag">
                      <small>JavaScript</small>
                    </div>
                    <div className="tag">
                      <small>Node JS</small>
                    </div>
                    <div className="tag">
                      <small>Postgres</small>
                    </div>
                    <div className="tag">
                      <small>System Architecture</small>
                    </div>
                    <div className="tag">
                      <small>Security</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section></section>
    </div>
  );
}

export default UserSettingsPage;
