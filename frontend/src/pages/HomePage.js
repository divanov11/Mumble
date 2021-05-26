import React, { useEffect } from 'react';
import ReactPlaceholder from 'react-placeholder';

import '../styles/components/HomePage.css';

import {
  Contributors,
  FeedCard,
  CreatePost,
  TopicTags,
  PostCardPlaceholder,
  Page,
} from '../components';
import { usersData } from '../data';
import { getPostsForDashboard, resetPostDashboard } from '../actions/postActions';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../common';

const HomePage = () => {
  const dispatch = useDispatch();
  const user = usersData.find((u) => Number(u.id) === 1);
  const { posts, next } = useSelector((state) => state.dashboard);
  const isPostsLoading = useSelector((state) => state.dashboard.loading);

  useEffect(() => {
    dispatch(getPostsForDashboard());
    return () => dispatch(resetPostDashboard()); // when the componenets un-mounts clear the posts from the store
  }, [dispatch]);

  const handleLoadMore = () => {
    if (!next || isPostsLoading) return;

    const searchString = new URL(next).search;
    const params = new URLSearchParams(searchString);
    const page = params.get('page');
    dispatch(getPostsForDashboard(page));
  };

  return (
    <Page>
      <section>
        <CreatePost />
        <ReactPlaceholder
          style={{ width: '100%' }}
          customPlaceholder={<PostCardPlaceholder />}
          showLoadingAnimation
          // show the posts if the loading is false or if there are posts
          ready={!isPostsLoading || posts.length > 0}
        >
          <FeedCard posts={posts} />
        </ReactPlaceholder>
        {next && ( // Load More Button
          <Button
            size="lg"
            loading={isPostsLoading}
            onClick={handleLoadMore}
            text={!isPostsLoading ? 'Load More' : 'Loading...'}
          />
        )}
      </section>

      <section>
        <Contributors />
        <TopicTags tags={user.interests} />
      </section>
    </Page>
  );
};

export default HomePage;
