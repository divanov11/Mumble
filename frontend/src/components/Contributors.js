import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import FollowButton from './FollowButton';
import { AuthorBox } from '../common';
import { listRecommenedUsers } from '../actions/userActions';
import { getImageUrl } from '../utilities/getImageUrl';

const Contributors = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userListRecommended);
  const { users } = userList;

  useEffect(() => {
    dispatch(listRecommenedUsers());
  }, [dispatch]);

  return (
    <div className="card">
      <div className="card__header">
        <h5 className="card__headerTitle">Top Contributors</h5>
        <Link className="card__link" to={'/search'}>
          View More
        </Link>
      </div>
      <div className="card__body">
        {users.map((user) => (
          <div key={user.id} className="contributor-wrapper">
            <div className="contributor-preview">
              <AuthorBox
                avatarSrc={getImageUrl(user.profile.profile_pic)}
                url={`/profile/${user.username}`}
                name={user.profile.name}
                // handle={user.username}
              />
            </div>
            <FollowButton userProfile={user.profile} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributors;
