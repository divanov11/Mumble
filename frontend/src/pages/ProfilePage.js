import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../styles/components/ProfilePage.css';

import {
  FeedCard,
  Page,
  PostCardPlaceholder,
  SkillTags,
  UserCard,
  UserCardPlaceholder,
} from '../components';

import {
  listUserArticles,
  listUserDetails,
  listUserPosts,
  resetUserDetails,
} from '../actions/userActions';

const Profile = ({ match }) => {
  const username = match.params.username;

  const dispatch = useDispatch();

  const userProfileDetail = useSelector((state) => state.userProfileDetail);
  const userPostsList = useSelector((state) => state.userPostsList);

  const { user: userProfile, loading: isUserLoading } = userProfileDetail;
  const { posts, loading: isPostsLoading } = userPostsList;

  useEffect(() => {
    dispatch(listUserDetails(username));
    dispatch(listUserPosts(username));
    dispatch(listUserArticles(username));

    return () => dispatch(resetUserDetails());
  }, [dispatch, username]);

  return (
    <Page>
      <section>{!isPostsLoading ? <FeedCard posts={posts} /> : <PostCardPlaceholder />}</section>

      <section>
        {!isUserLoading && userProfile ? (
          <div>
            <UserCard userProfile={userProfile} />
            <SkillTags tags={userProfile.skills} />
          </div>
        ) : (
          <UserCardPlaceholder />
        )}
      </section>
    </Page>
  );
};

export default Profile;
