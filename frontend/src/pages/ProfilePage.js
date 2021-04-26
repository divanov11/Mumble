import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import '../styles/components/ProfilePage.css';

import {
  ArticlesCard,
  DiscussionsCard,
  FeedCard,
  PostCardPlaceholder,
  SkillTags,
  UserCard,
  UserCardPlaceholder,
} from '../components';
import { articles, discussions } from '../data';

import { listUserDetails, listUserPosts, resetUserDetails } from '../actions/userActions';

const Profile = ({ match }) => {
  const username = match.params.username;

  const dispatch = useDispatch();

  const userProfileDetail = useSelector((state) => state.userProfileDetail);
  const userPostsList = useSelector((state) => state.userPostsList);

  const { user, loading: isUserLoading } = userProfileDetail;
  const { posts, loading: isPostsLoading } = userPostsList;

  useEffect(() => {
    dispatch(listUserDetails(username));
    dispatch(listUserPosts(username));

    // clear the userDetails when user goes out this page
    return () => dispatch(resetUserDetails());
  }, [dispatch, username]);

  return (
    <div className="container three-column-layout">
      <section>
        {!isUserLoading && user ? (
          <>
            <UserCard user={user} />
            <SkillTags tags={user.skills} />
          </>
        ) : (
          <UserCardPlaceholder />
        )}
      </section>

      <section>
        <div className="card">
          <div className="card__body">
            <Link className="btn btn--main--outline" to={'/'}>
              &#8592; Go Back{' '}
            </Link>
          </div>
        </div>
        {!isPostsLoading ? <FeedCard posts={posts} /> : <PostCardPlaceholder />}
      </section>

      <section className="three-column-layout__right-column">
        <DiscussionsCard discussions={discussions} />
        <ArticlesCard articles={articles} />
      </section>
    </div>
  );
};

export default Profile;
