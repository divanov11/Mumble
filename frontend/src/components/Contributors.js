import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getApiUrl } from '../services/config';

import { Avatar, FollowButton } from '../common';

import { listRecommenedUsers } from '../actions/userActions';

const Contributors = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userListRecommended);
  const { users } = userList;

  useEffect(() => {
    dispatch(listRecommenedUsers());
  }, [dispatch]);

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
            <FollowButton userProfile={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributors;
