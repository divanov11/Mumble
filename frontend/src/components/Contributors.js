import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getApiUrl } from '../services/config';

import { AuthorBox, FollowButton } from '../common';

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

        {users.map((user) => (
          <div key={user.id} className="contributor-wrapper">
            <div className="contributor-preview">
              <AuthorBox
                avatarSrc={getApiUrl(user.profile.profile_pic)}
                url={`/profile/${user.username}`}
                name={user.profile.name}
                // handle={user.username}
              />
            </div>
            <FollowButton userProfile={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributors;
