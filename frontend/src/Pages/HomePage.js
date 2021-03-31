import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Css/HomePage.css'
//Components
import Contributors from '../Components/Contributors';
import Feed from '../Components/Feed';
import PostForm from '../Components/PostForm';
import TopicTags from '../Components/TopicTags';
import DiscussionsCard from '../Components/DiscussionsCard';
import ArticlesCard from '../Components/ArticlesCard';

//Dummy Data Files
import postsData from '../data/posts';
import userData from '../data/users';
import discussions from '../data/discussions';
import articles from '../data/articles';
import { PostsContext } from "../Context/PostsContext";


function HomePage() {
    const [posts, setPosts] = useState(postsData);
    let user = userData.find((u) => u.id == 1);
    let contributers = userData;

    return (
        <div class='container home--layout'>
            <section id='sidebar--left--home'>
                <Contributors users={contributers} />
                <TopicTags tags={user.interests} />
            </section>


            <section id='center-content'>
                <PostsContext.Provider value={[posts, setPosts]}>
                    <PostForm />
                </PostsContext.Provider>
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
