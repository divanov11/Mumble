import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Profile.css';

//components
import Feed from '../components/Feed';
import DiscussionsCard from '../components/DiscussionsCard';
import ArticlesCard from '../components/ArticlesCard';
import SkillTags from '../components/SkillTags';

//Dummy Data Files
import userData from '../data/users';
import postsData from '../data/posts';
import discussions from '../data/discussions';
import articles from '../data/articles';
import UserCard from '../components/UserCard';

function Profile({ match }) {
  let user = userData.find((u) => u.username === match.params.username);
  let posts = postsData.filter(
    (p) => p.user.username === match.params.username,
  );

  return (
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
        <Feed posts={posts} />
      </section>

      <section id="sidebar--right--profile">
        <DiscussionsCard discussions={discussions} />
        <ArticlesCard articles={articles} />
      </section>
    </div>
  );
}

export default Profile;
