import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser } from '../actions/userActions';

const FollowButton = ({ userProfile }) => {
  console.log('USER:', userProfile);
  let dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const { user } = auth;

  const toggleFollow = (e, username) => {
    if (e.target.classList.contains('btn--sub')) {
      e.target.className = 'btn btn--main--outline btn--sm';
      e.target.innerText = 'Follow';
    } else {
      e.target.className = 'btn btn--sub btn--sm';
      e.target.innerText = 'Following';
    }
    dispatch(followUser(username));
  };

  return (
    <div>
      {userProfile.profile.followers.includes(user.id) ? (
        <button
          onClick={(e) => {
            toggleFollow(e, userProfile.username);
          }}
          className="btn btn--sub btn--sm"
        >
          Following
        </button>
      ) : (
        <button
          onClick={(e) => {
            toggleFollow(e, userProfile.username);
          }}
          className="btn btn--main--outline btn--sm"
        >
          Follow
        </button>
      )}
    </div>
  );
};

export default FollowButton;
