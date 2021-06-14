import React, { useState } from 'react';
import '../styles/components/UserCard.css';

import { Avatar, Button } from '../common';
import FollowButton from './FollowButton';
import { useSelector } from 'react-redux';
import { getImageUrl } from '../utilities/getImageUrl';
import CreateMessageModal from './CreateMessageModal';

const UserCard = ({ userProfile, onMessageCreated }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="user-card card">
      <div className="card__body">
        <div className="user-card__profile-summary">
          <Avatar
            alt="img-description"
            className="user-card__profile-pic"
            src={getImageUrl(userProfile.profile_pic)}
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

          {isAuthenticated && userProfile?.user !== user?.id && (
            <div className="user-card__actions">
              <FollowButton userProfile={userProfile} />
              <Button
                onClick={() => setShowCreateModal(true)}
                color="main"
                size="sm"
                text="Send Message"
                outline
              />
            </div>
          )}
        </div>
      </div>

      <CreateMessageModal
        toUser={userProfile.user}
        active={showCreateModal}
        setActive={setShowCreateModal}
        onMessageCreated={onMessageCreated}
      />
    </div>
  );
};

export default UserCard;
