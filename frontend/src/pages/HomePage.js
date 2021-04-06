import React, {useEffect, useState} from 'react';
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

function HomePage() {
  //let posts = postsData;
  let user = userData.find((u) => Number(u.id) === 1);
  //let contributors = userData.slice(0, 3);

  let [posts, setPosts] = useState([])
  let [contributors, setContributors] = useState([])

  let fetchUsers = () => {
    fetch(`/api/users`) 
    .then(response =>  response.json())
    .then((data) => { 
      setContributors(data.slice(0, 3))
    })
  } 


  let fetchPosts = () => {
      fetch(`/api/posts`) 
      .then(response =>  response.json())
      .then((data) => { 
        setPosts(data)
      })
    }

    useEffect(() => {
        fetchPosts() 
        fetchUsers() 
    }, [])

  return (
    <div className="container home--layout">
      <section id="sidebar--left--home">
        <Contributors users={contributors} />
        <TopicTags tags={user.interests} />
      </section>

      <section id="center-content">
        <PostForm />
        <Feed posts={posts} />
      </section>

      <section id="sidebar--right--home">
        <DiscussionsCard discussions={discussions} />
        <ArticlesCard articles={articles} />
      </section>
    </div>
  );
}

export default HomePage;
