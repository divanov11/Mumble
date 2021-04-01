import React from "react";
import { Link } from "react-router-dom";
import "../Css/Profile.css";

//Components
import Feed from "../Components/Feed";
import DiscussionsCard from "../Components/DiscussionsCard";
import ArticlesCard from "../Components/ArticlesCard";
import SkillTags from "../Components/SkillTags";

//Dummy Data Files
import userData from "../data/users";
import postsData from "../data/posts";
import discussions from "../data/discussions";
import articles from "../data/articles";
import UserCard from "../Components/UserCard";

const Profile = ({ match }) => {
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
            <Link className="btn btn--main--outline" to={"/"}>
              &#8592; Go Back{" "}
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
};

export default Profile;
