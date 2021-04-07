import React, { useState, useEffect, useCallback } from 'react';
import { Link, Redirect } from 'react-router-dom';

import '../styles/components/Profile.css';

import { ArticlesCard, DiscussionsCard, FeedCard, SkillTags, UserCard } from '../components';
import { articles, discussions } from '../data';

const Profile = ({ match }) => {
  const username = match.params.username;

  const [user, setUser] = useState({ skills: [] });
  let [posts, setPosts] = useState([]);
  let [loading, setLoading] = useState(true);

  let fetchPosts = useCallback(() => {
    //Why is the proxy URL not workin here??
    fetch(`https://mumbleapi.herokuapp.com/api/users/${username}/posts`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, [username]);

  let fetchUser = useCallback(() => {
    fetch(`https://mumbleapi.herokuapp.com/api/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUser({
          username: username,
          profile_pic: data.profile.profile_pic,
          skills: data.profile.skills,
          name: data.profile.name,
          bio: data.profile.bio,
          vote_ratio: data.profile.vote_ratio,
          followers_count: data.profile.followers_count,
        });
      });
  }, [username]);

  useEffect(() => {
    if (loading) {
      fetchUser();
      fetchPosts();
      setLoading(false);
    }
  }, [fetchUser, fetchPosts, loading]);

  return user ? (
    <div className="container profile--layout">
      <section id="sidebar--left--profile">
        <UserCard user={user} />
        <SkillTags tags={user.skills} />
      </section>

      <section id="center-content">
        <div className="card">
          <div className="card__body">
            <Link className="btn btn--main--outline" to={'/'}>
              &#8592; Go Back{' '}
            </Link>
          </div>
        </div>
        <FeedCard posts={posts} />
      </section>

      <section id="sidebar--right--profile">
        <DiscussionsCard discussions={discussions} />
        <ArticlesCard articles={articles} />
      </section>
    </div>
  ) : (
    <Redirect to="/404" />
  );
};

export default Profile;
