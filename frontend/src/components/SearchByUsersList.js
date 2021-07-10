import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RoundShape, TextBlock } from 'react-placeholder/lib/placeholders';
import { Link, useLocation } from 'react-router-dom';

import '../styles/components/SearchBox.css';
import '../styles/components/SearchByUsersAndPostList.css';
import logo from '../assets/logo/dark-logo.png';

import { AuthorBox, Button } from '../common';
import { listUsers, resetListUsers, listMoreUsers } from '../actions/userActions';
import FollowButton from './FollowButton';
import ReactPlaceholder from 'react-placeholder/lib';
import { getImageUrl } from '../utilities/getImageUrl';

const SearchByUsersList = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  /* keyword looks like this `?q=john` */
  const keyword = location.search;
  const userList = useSelector((state) => state.userList);
  const { isAuthenticated, user: currentUser } = useSelector((state) => state.auth);
  const { loading, data } = userList;

  const showLoadMoreButton = data.next;

  useEffect(() => {
    /* Everytime the user changes the search term,
     * 1. Clear the previous results in store
     * 2. And then make request for the new search term
     */
    dispatch(resetListUsers());
    dispatch(listUsers(keyword));
  }, [dispatch, keyword]);

  const handleLoadMore = () => {
    if (!data.next) return;

    /* keywordWithPageNo looks like this `?page=2&q=john` */
    const keywordWithPageNo = new URL(data.next).search;
    dispatch(listMoreUsers(keywordWithPageNo));
  };

  const showResultsNotFound = data?.results?.length === 0;

  return (
    <div className="category-wrapper" id="category-users">
      <ReactPlaceholder
        customPlaceholder={<SearchByUsersListPlaceholder />}
        showLoadingAnimation
        ready={!loading || data.results.length > 0}
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
            {data.results.map((user) => (
              <>
                {isAuthenticated && currentUser?.username !== user?.username && (
                  <div key={user.name} className="card">
                    <div className="card__body">
                      <div className="searchItem">
                        <div className="searchItem__top">
                          <AuthorBox
                            avatarSrc={getImageUrl(user.profile.profile_pic)}
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
                )}
              </>
            ))}
            <div>
              {showLoadMoreButton && (
                <Button
                  size="lg"
                  loading={!data?.next || loading}
                  onClick={handleLoadMore}
                  text={!loading ? 'Load More' : 'Loading...'}
                  iconName={loading ? 'spinner fa-spin' : ''}
                />
              )}
            </div>
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
