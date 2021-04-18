import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser } from '../actions/userActions';
import Button from '../common/Button';

const FollowButton = ({ userProfile }) => {
  const auth = useSelector((state) => state.auth);
  const { user } = auth;

  const [isFollowing, setIsFollowing] = useState(() =>
    userProfile.profile.followers.includes(user.id),
  );

  const dispatch = useDispatch();

  const toggleFollow = (e, username) => {
    setIsFollowing(!isFollowing);
    dispatch(followUser(username));
  };

  return (
    <div>
      {isFollowing ? (
        <Button
          onClick={(e) => toggleFollow(userProfile.username)}
          color="main"
          size="sm"
          iconName="user-check"
          text="Following"
        />
      ) : (
        <Button
          onClick={(e) => toggleFollow(userProfile.username)}
          color="main"
          size="sm"
          iconName="user-plus"
          text="Follow"
          outline
        />
      )}
    </div>
  );
};

export default FollowButton;
