import React from 'react';

import { Avatar } from '../common';

const UserCard = ({ user }) => {
  return (
    <div className="card">
      <div className="card__body">
        <div id="user-profile-summary">
          <Avatar alt="img-description" id="profile_pic" src={user.profile_pic} size="lg" />
          <h1 id="user-profile-name">{user.name}</h1>
          <i>@{user.username}</i>
          <div className="custom-spacer"></div>
          <p>{user.bio}</p>
          <div id="profile-stats-wrapper">
            <div>
              {Math.sign(user.vote_ratio) === -1 ? (
                <h6>{user.vote_ratio}</h6>
              ) : (
                <h6>+{user.vote_ratio}</h6>
              )}

              <i>Vote Ratio</i>
            </div>
            <div>
              <h6>{user.followers_count}</h6>
              <i>Followers</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
