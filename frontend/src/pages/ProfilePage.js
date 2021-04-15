import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, Redirect } from 'react-router-dom';

import '../styles/components/Profile.css';

import { ArticlesCard, DiscussionsCard, FeedCard, SkillTags, UserCard } from '../components';
import { articles, discussions } from '../data';

import { listUserDetails, listUserPosts } from '../actions/userActions';

const Profile = ({ match }) => {
  const username = match.params.username;

  const dispatch = useDispatch();

  const userProfileDetail = useSelector((state) => state.userProfileDetail);
  const userPostsList = useSelector((state) => state.userPostsList);

  const { user } = userProfileDetail;
  const { posts } = userPostsList;

  useEffect(() => {
    dispatch(listUserDetails(username));
    dispatch(listUserPosts(username));
  }, [dispatch, username]);

  return user ? (
    <div className="container profile--layout">
      <section id="sidebar--left--profile">
        <UserCard user={user} />
        {console.log('USER:', user)}
        <SkillTags tags={user.skills} />
      </section>

      <section id="center-content">
        <div className="card">
          <div className="card__body">
            <Link className="btn btn--main--outline" to={'/'}>
              &#8592; Go Back{' '}
            </Link>
          </div>
        </div>
        <FeedCard posts={posts} />
      </section>

      <section id="sidebar--right--profile">
        <DiscussionsCard discussions={discussions} />
        <ArticlesCard articles={articles} />
      </section>
    </div>
  ) : (
    <Redirect to="/404" />
  );
};

export default Profile;
