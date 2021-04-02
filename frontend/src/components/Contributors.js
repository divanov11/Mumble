import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../common/Avatar';

function Contributors({ users }) {
  return (
    <div className="card">
      <div className="card__body">
        <h5>Top Contributors</h5>
        <div className="custom-spacer"></div>

        {users.map((user) => (
          <div key={user.id} className="contributor-wrapper">
            <div className="contributor-preview">
              <Avatar src={user.profile_pic} alt="img-description" />
              <Link to={`/profile/${user.username}`}>
                <strong>{user.name}</strong>
              </Link>
            </div>
            <Link className="btn btn--main--outline btn--sm" to="">
              Follow
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contributors;
