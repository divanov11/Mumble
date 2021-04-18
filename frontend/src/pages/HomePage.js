import React, { useEffect, useState } from 'react';
import ReactPlaceholder from 'react-placeholder';

import '../styles/components/HomePage.css';

import {
  Contributors,
  FeedCard,
  CreatePost,
  TopicTags,
  DiscussionsCard,
  PostCardPlaceholder,
} from '../components';
import { discussions, usersData } from '../data';
import { UsersService } from '../services';
import { getPostsForDashboard } from '../actions/postActions';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  const user = usersData.find((u) => Number(u.id) === 1);

  const [contributors, setContributors] = useState([]);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.dashboard.posts);
  const isPostsLoading = useSelector((state) => state.dashboard.loading);

  useEffect(() => {
    UsersService.getUsers().then((users) => {
      setContributors(users.slice(0, 3));
    });

    dispatch(getPostsForDashboard());
  }, [dispatch]);

  return (
    <div className="container three-column-layout">
      <section className="three-column-layout__left-column">
        <Contributors users={contributors} />
      </section>

      <section>
        <CreatePost />
        <ReactPlaceholder
          customPlaceholder={<PostCardPlaceholder />}
          showLoadingAnimation
          ready={!isPostsLoading}
        >
          <FeedCard posts={posts} />
        </ReactPlaceholder>
      </section>

      <section className="three-column-layout__right-column">
        <TopicTags tags={user.interests} />
        <DiscussionsCard discussions={discussions} />
        {/* 
        At some point I will add articles into rotation with disccssions. This will be in one card -- Dennis Ivy
        <ArticlesCard articles={articles} /> 
        */}
      </section>
    </div>
  );
};

export default HomePage;
