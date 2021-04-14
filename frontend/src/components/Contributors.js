import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getApiUrl } from '../services/config';

import { Avatar } from '../common';

import { listRecommenedUsers, followUser } from '../actions/userActions';

const Contributors = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userListRecommended);
  const { users } = userList;

  const auth = useSelector((state) => state.auth);
  const { user } = auth;

  useEffect(() => {
    dispatch(listRecommenedUsers());
  }, [dispatch]);

  const toggleFollow = (username) => {
    dispatch(followUser(username));
  };

  return (
    <div className="card">
      <div className="card__body">
        <h5>Top Contributors</h5>
        <Link to={'/search'}>View More</Link>
        <div className="custom-spacer"></div>

        {users.map((i) => (
          <div key={i.id} className="contributor-wrapper">
            <div className="contributor-preview">
              <Avatar src={getApiUrl(i.profile.profile_pic)} alt="img-description" />
              <Link to={`/profile/${i.username}`}>
                <strong>{i.profile.name}</strong>
              </Link>
            </div>
            {i.profile.followers.includes(user.id) ? (
              <button
                onClick={() => {
                  toggleFollow(i.username);
                }}
                className="btn btn--sub btn--sm"
              >
                Following
              </button>
            ) : (
              <button
                onClick={() => {
                  toggleFollow(i.username);
                }}
                className="btn btn--main--outline btn--sm"
              >
                Follow
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributors;
