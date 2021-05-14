import React from 'react';
import { getApiUrl } from '../services/config';
import '../styles/components/UserCard.css';

import { Avatar } from '../common';
import FollowButton from './FollowButton';
import { useSelector } from 'react-redux';

const UserCard = ({ userProfile }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <div className="user-card card">
      <div className="card__body">
        <div className="user-card__profile-summary">
          <Avatar
            alt="img-description"
            className="user-card__profile-pic"
            src={getApiUrl(userProfile.profile_pic)}
            size="lg"
          />
          <h1 className="user-card__profile-name">{userProfile.name}</h1>
          <i>@{userProfile.username}</i>
          <div className="custom-spacer"></div>
          <p>{userProfile.bio}</p>
          <div className="user-card__profile-stats-wrapper">
            <div>
              {Math.sign(userProfile.vote_ratio) === -1 ? (
                <h6>{userProfile.vote_ratio}</h6>
              ) : (
                <h6>+{userProfile.vote_ratio}</h6>
              )}

              <i>Vote Ratio</i>
            </div>
            <div>
              <h6>{userProfile.followers_count}</h6>
              <i>Followers</i>
            </div>
          </div>

          {isAuthenticated && userProfile?.username !== user?.username && (
            <div>
              <FollowButton userProfile={userProfile} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
