import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { listUsers } from '../actions/userActions';

import '../styles/components/SearchBox.css';

const SearchByUsersList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const keyword = location.search;
  const userList = useSelector((state) => state.userList);
  const { users } = userList;

  useEffect(() => {
    dispatch(listUsers(keyword));
  }, [dispatch, keyword]);

  return (
    <div className="category-wrapper" id="category-users">
      {users.length > 0 ? (
        <div>
          {users.map((user, index) => (
            <div key={index} className="card">
              <div className="card__body">
                <Link to={`/profile/${user.username}`}>
                  <div className="search--item--wrapper--1">
                    <img alt="" className="avatar avatar--md" src={user.profile.profile_pic} />
                    <div>
                      <strong>{user.profile.name}</strong>
                      <small>@{user.username}</small>
                      <p>{user.profile.bio}</p>
                    </div>
                    <button className="btn btn--main--outline btn--sm">Follow</button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h5>No Results found..</h5>
        </div>
      )}
    </div>
  );
};

export default SearchByUsersList;
