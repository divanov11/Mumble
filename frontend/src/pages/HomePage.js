import React, { useEffect, useState } from 'react';
import '../styles/components/Home.css';
//components
import Contributors from '../components/Contributors';
import Feed from '../components/Feed';
import PostForm from '../components/CreatePost';
import TopicTags from '../components/TopicTags';
import DiscussionsCard from '../components/DiscussionsCard';
import ArticlesCard from '../components/ArticlesCard';

//Dummy Data Files
//import postsData from '../data/posts';
import userData from '../data/users';
import discussions from '../data/discussions';
import articles from '../data/articles';
import ReactPlaceholder from 'react-placeholder';
import PostCardPlaceholder from '../components/PostCardPlaceholder';

const useLoadingListener = (asyncFn) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const wrappedFn = () =>
    asyncFn().then(() => {
      setIsLoaded(true);
    });

  return [isLoaded, wrappedFn];
};

function HomePage() {
  //let posts = postsData;
  let user = userData.find((u) => Number(u.id) === 1);
  //let contributors = userData.slice(0, 3);

  let [posts, setPosts] = useState([]);
  let [contributors, setContributors] = useState([]);

  const fetchUsers = () =>
    fetch(`https://mumbleapi.herokuapp.com/api/users`)
      .then((response) => response.json())
      .then((data) => {
        setContributors(data.slice(0, 3));
      });

  const [isDoneFetchingPosts, fetchPosts] = useLoadingListener(() =>
    fetch(`https://mumbleapi.herokuapp.com/api/posts`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      }),
  );

  useEffect(() => {
    fetchPosts();
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container home--layout">
      <section id="sidebar--left--home">
        <Contributors users={contributors} />
        <TopicTags tags={user.interests} />
      </section>

      <section id="center-content">
        <PostForm />
        <ReactPlaceholder
          customPlaceholder={<PostCardPlaceholder />}
          showLoadingAnimation
          ready={isDoneFetchingPosts}
        >
          <Feed posts={posts} />
        </ReactPlaceholder>
      </section>

      <section id="sidebar--right--home">
        <DiscussionsCard discussions={discussions} />
        <ArticlesCard articles={articles} />
      </section>
    </div>
  );
}

export default HomePage;
