import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RoundShape, TextBlock } from 'react-placeholder/lib/placeholders';
import { Link, useLocation } from 'react-router-dom';

import '../styles/components/SearchBox.css';
import '../styles/components/SearchByUsersandPostList.css';
import logo from '../assets/logo/dark-logo.png';

import { AuthorBox, FollowButton } from '../common';
import { listUsers } from '../actions/userActions';
import { getApiUrl } from '../services/config';

const SearchByUsersList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const keyword = location.search;

  const userList = useSelector((state) => state.userList);
  const { users, loading } = userList;

  useEffect(() => {
    dispatch(listUsers(keyword));
  }, [dispatch, keyword]);

  if (loading) {
    return [0, 1, 2, 3].map((key) => <SearchByUsersListPlaceholder key={key} />);
  }

  return (
    <div className="category-wrapper" id="category-users">
      {users.length === 0 ? (
        <div className="card">
          <div className="card__body">
            <div className="not__found">
              <div>
                <h2 className="fade__404__logo">
                  4
                  <span>
                    <img src={logo} alt="Mumble Icon" />
                  </span>
                  4
                </h2>
                <h3>Mumble user not found !</h3>
                <br />
                <p>Looks like the username was misspelled or there is no account linked to that username !</p>
                <br />  
                <Link to="/">&#x2190; Go Home</Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {users.map((user, index) => (
            <div key={index} className="card">
              <div className="card__body">
                <div className="searchItem">
                  <div className="searchItem__top">
                    <AuthorBox
                      avatarSrc={getApiUrl(user.profile.profile_pic)}
                      url={`/profile/${user.username}`}
                      name={user.profile.name}
                      handle={user.username}
                      size="md"
                    />
                    <FollowButton userProfile={user} />
                  </div>
                  <p className="searchItem__bottom">{user.profile.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchByUsersList;

const SearchByUsersListPlaceholder = () => {
  return (
    <div className="card">
      <div className="card__body">
        <div className="searchitem__wrapper--1">
          <RoundShape color="#c5c5c5" style={{ width: 70, height: 70 }} />
          <div className="searchitem__info">
            <div className="searchitem__info--top">
              <div className="searchitem__info--top-text">
                <TextBlock rows={1} color="#c5c5c5" style={{ width: 100 }} />
                <TextBlock rows={1} color="#c5c5c5" style={{ width: 100 }} />
              </div>
            </div>
            <TextBlock rows={2} color="#c5c5c5" style={{ width: 200 }} />
          </div>
        </div>
      </div>
    </div>
  );
};
