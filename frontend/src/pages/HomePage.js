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

const apiEndpoint =
  process.env.REACT_APP_API_URL || 'https://mumbleapi.herokuapp.com/api';

function HomePage() {
  let user = userData.find((u) => Number(u.id) === 1);
  //let posts = postsData;

  const [users, setUsers] = useState([]); //eslint-disable-line
  const [posts, setPosts] = useState([]);
  const [contributors, setContributors] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    // Get User Data
    fetch(`${apiEndpoint}/users`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setContributors(data.slice(0, 3));
      });

    // Get Post Data
    fetch(`${apiEndpoint}/posts`)
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
        <PostForm />
        <ReactPlaceholder
          customPlaceholder={<PostCardPlaceholder />}
          showLoadingAnimation
          ready={isLoaded}
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
