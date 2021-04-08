import React, { useEffect, useState } from 'react';
import ReactPlaceholder from 'react-placeholder';

import '../styles/components/Home.css';

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
import { getUsers } from '../services/usersService';
import { getPosts } from '../services/postsService';

const HomePage = () => {
  const user = usersData.find((u) => Number(u.id) === 1);

  const [posts, setPosts] = useState([]);
  const [contributors, setContributors] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    getUsers().then(({ data }) => {
      setContributors(data.slice(0, 3));
    });

    getPosts()
      .then(({ data }) => {
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
