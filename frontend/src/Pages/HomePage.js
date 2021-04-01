
import React from 'react';
import '../Css/HomePage.css'
//Components
import Contributors from "../Components/Contributors";
import Feed from "../Components/Feed";
import PostForm from "../Components/PostForm";
import TopicTags from "../Components/TopicTags";
import DiscussionsCard from "../Components/DiscussionsCard";
import ArticlesCard from "../Components/ArticlesCard";

//Dummy Data Files
import postsData from "../data/posts";
import userData from "../data/users";
import discussions from "../data/discussions";
import articles from "../data/articles";

function HomePage() {

    let posts = postsData;
    let user = userData.find((u) => Number(u.id) === 1);
    let contributers = userData;

    return (
        <div class='container home--layout'>
            <section id='sidebar--left--home'>
                <Contributors users={contributers} />
                <TopicTags tags={user.interests} />
            </section>

      <section id="center-content">
        <PostForm />
        <Feed posts={posts} />
      </section>


            <section id='sidebar--right--home'>
                <DiscussionsCard discussions={discussions} />
                <ArticlesCard articles={articles} />
            </section>
        </div>
    );
}

export default HomePage;
