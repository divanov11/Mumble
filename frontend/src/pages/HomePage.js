import React, { useEffect, useState } from 'react';
import ReactPlaceholder from 'react-placeholder';

import '../styles/components/Home.css';

import { apiEndpoint } from '../config';
import {
  Contributors,
  FeedCard,
  CreatePost,
  TopicTags,
  DiscussionsCard,
  ArticlesCard,
  PostCardPlaceholder,
} from '../components';
import { articles, discussions, usersData } from '../data';

const HomePage = () => {
  const user = usersData.find((u) => Number(u.id) === 1);

  const [users, setUsers] = useState([]); //eslint-disable-line
  const [posts, setPosts] = useState([]);
  const [contributors, setContributors] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    // Get User Data
    fetch(apiEndpoint.getUsers)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setContributors(data.slice(0, 3));
      });

    // Get Post Data
    fetch(apiEndpoint.getPosts)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .then(() => setLoaded(true));
  }, []);

  return (
    <div className="container home--layout">
      <section id="sidebar--left--home">
        <Contributors users={contributors} />
        <TopicTags tags={user.interests} />
      </section>

      <section id="center-content">
        <CreatePost />
        <ReactPlaceholder
          customPlaceholder={<PostCardPlaceholder />}
          showLoadingAnimation
          ready={isLoaded}
        >
          <FeedCard posts={posts} />
        </ReactPlaceholder>
      </section>

      <section id="sidebar--right--home">
        <DiscussionsCard discussions={discussions} />
        <ArticlesCard articles={articles} />
      </section>
    </div>
  );
};

export default HomePage;
