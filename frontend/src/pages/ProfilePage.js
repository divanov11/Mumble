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
import { Message } from '../common';
import { useState } from 'react';

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

  const [message, setMessage] = useState('');

  const onMessageCreated = () => {
    setMessage('Succesfully created a message');
  };

  return (
    <Page>
      <section>
        {message && (
          <Message onClose={() => setMessage('')} dismissible variant="success">
            {message}
          </Message>
        )}
        {!isPostsLoading ? <FeedCard posts={posts} /> : <PostCardPlaceholder />}
      </section>

      <section>
        {!isUserLoading && userProfile ? (
          <div>
            <UserCard onMessageCreated={onMessageCreated} userProfile={userProfile} />
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
