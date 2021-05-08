import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RoundShape, TextBlock } from 'react-placeholder/lib/placeholders';
import { Link, useLocation } from 'react-router-dom';

import '../styles/components/SearchBox.css';
import '../styles/components/SearchByUsersAndPostList.css';
import logo from '../assets/logo/dark-logo.png';

import { AuthorBox } from '../common';
import { listUsers } from '../actions/userActions';
import { getApiUrl } from '../services/config';
import FollowButton from './FollowButton';
import ReactPlaceholder from 'react-placeholder/lib';

const SearchByUsersList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const keyword = location.search;

  const userList = useSelector((state) => state.userList);
  const { users, loading } = userList;

  useEffect(() => {
    dispatch(listUsers(keyword));
  }, [dispatch, keyword]);

  const showResultsNotFound = users.length === 0;

  return (
    <div className="category-wrapper" id="category-users">
      <ReactPlaceholder
        customPlaceholder={<SearchByUsersListPlaceholder />}
        showLoadingAnimation
        ready={!loading}
      >
        {showResultsNotFound && (
          <div className="card">
            <div className="card__body">
              <div className="not-found">
                <div>
                  <h2 className="not-found__logo">
                    4
                    <span>
                      <img src={logo} alt="Mumble Icon" />
                    </span>
                    4
                  </h2>
                  <h3>Mumble user not found</h3>
                  <br />
                  <p>
                    Looks like the username was misspelled or there is no account linked to that
                    username !
                  </p>
                  <br />
                  <Link to="/">&#x2190; Go Home</Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {!showResultsNotFound && (
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
                      <FollowButton userProfile={user.profile} />
                    </div>
                    <p className="searchItem__bottom">{user.profile.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </ReactPlaceholder>
    </div>
  );
};

export default SearchByUsersList;

const SearchByUsersListPlaceholder = (props) => {
  const NUMBER_OF_ITEMS = 5;
  return new Array(NUMBER_OF_ITEMS).fill(0).map((value, idx) => (
    <div key={idx} className={props.className}>
      <div className="card__body">
        <div className="searchitem">
          <RoundShape color="#c5c5c5" style={{ width: 70, height: 70 }} />
          <div className="searchitem__info">
            <TextBlock rows={2} color="#c5c5c5" style={{ width: 200 }} />
          </div>
        </div>
        <TextBlock rows={2} color="#c5c5c5" style={{ width: '100%' }} />
      </div>
    </div>
  ));
};
