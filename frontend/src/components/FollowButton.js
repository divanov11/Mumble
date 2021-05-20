import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser } from '../actions/userActions';
import Button from '../common/Button';

const FollowButton = ({ userProfile }) => {
  const isFollowingThisUser = useSelector(
    (state) => !!state.following.following.find((userIFollow) => userIFollow.id === userProfile.id),
  );

  const isFollowLoading = useSelector((state) => state.follow.loading[userProfile.username]);
  const isLoading = isFollowLoading;

  const dispatch = useDispatch();

  const toggleFollow = (username) => {
    dispatch(followUser(username));
  };

  return (
    <div>
      {isFollowingThisUser ? (
        <Button
          onClick={(e) => toggleFollow(userProfile.username)}
          color="main"
          size="sm"
          loading={isLoading}
          text="Following"
        />
      ) : (
        <Button
          onClick={(e) => toggleFollow(userProfile.username)}
          color="main"
          loading={isLoading}
          size="sm"
          text="Follow"
          outline
        />
      )}
    </div>
  );
};

export default FollowButton;
