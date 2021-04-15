import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RoundShape, TextBlock } from 'react-placeholder/lib/placeholders';
import { Link, useLocation } from 'react-router-dom';
import { listUsers } from '../actions/userActions';
import { getApiUrl } from '../services/config';
import Fade from 'react-reveal/Fade';

import '../styles/components/SearchBox.css';
import '../styles/components/SearchByUsersandPostList.css';
import logo from '../assets/logo/dark-logo.png';
import { FollowButton } from '../common';

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
      {users.length > 0 ? (
        <div>
          {users.map((i, index) => (
            <div key={index} className="card">
              <div className="card__body">
                <div className="searchitem__wrapper--1">
                  <img
                    alt=""
                    className="avatar avatar--md"
                    src={getApiUrl(i.profile.profile_pic)}
                  />

                  <div className="searchitem__info">
                    <div className="searchitem__info--top">
                      <div className="searchitem__info--top-text">
                        <strong>{i.profile.name}&nbsp;</strong>
                        <Link to={`/profile/${i.username}`} className="searchitem__link ">
                          <small>@{i.username}</small>
                        </Link>
                      </div>

                      <FollowButton userProfile={i} />
                    </div>
                    <p>{i.profile.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : users.length === 0 ? (
          <div className="card">
            <div className="card__body">
                <div className="not__found">
                  <Fade bottom>
                    <h2>4 <span><img src={logo} alt="Mumble Icon" /></span> 4</h2>
                  </Fade>
                  <h3>Mumble contributor not found!</h3>
                <p>Nunc a tellus in mauris imperdiet tincidunt. Aenean dui urna</p>
                <Link to="/">
                  &#x2190; Go Home
                </Link>
                </div>
            </div>
          </div>
      ) : null}
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
