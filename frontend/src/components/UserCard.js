import React from 'react';
import { getApiUrl } from '../services/config';
import '../styles/components/UserCard.css';

import FollowButton from './FollowButton';
import { Avatar } from '../common';

const UserCard = ({ user }) => {
  return (
    <div className="user-card card">
      <div className="card__body">
        <div className="user-card__profile-summary">
          <Avatar
            alt="img-description"
            className="user-card__profile-pic"
            src={getApiUrl(user.profile_pic)}
            size="lg"
          />
          <h1 className="user-card__profile-name">{user.name}</h1>
          <i>@{user.username}</i>
          <div className="custom-spacer"></div>
          <p>{user.bio}</p>
          <div className="user-card__profile-stats-wrapper">
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
          <div className="followbutton__profilepage">
            <FollowButton userProfile={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
