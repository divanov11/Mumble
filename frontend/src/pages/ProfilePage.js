import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../styles/components/ProfilePage.css';
import banner from '../assets/images/screenshot.PNG';
import justSaying from '../assets/images/just_saying.svg';
import postsImage from '../assets/images/post.svg';
import constructionImage from '../assets/images/construction.svg';

import {
  FeedCard,
  Page,
  PostCardPlaceholder,
  SkillTags,
  Tabs,
  UserCard,
  UserCardPlaceholder,
} from '../components';

import {
  listUserArticles,
  listUserDetails,
  listUserPosts,
  resetUserDetails,
} from '../actions/userActions';
import { Button, Card } from '../common';

const Profile = ({ match }) => {
  const username = match.params.username;

  const dispatch = useDispatch();

  const userProfileDetail = useSelector((state) => state.userProfileDetail);
  const userPostsList = useSelector((state) => state.userPostsList);
  const auth = useSelector((state) => state.auth);
  const { articles, loading: articlesLoading } = useSelector((state) => state.userArticleList);

  const { user: userProfile, loading: isUserLoading } = userProfileDetail;
  const { posts, loading: isPostsLoading } = userPostsList;

  useEffect(() => {
    dispatch(listUserDetails(username));
    dispatch(listUserPosts(username));
    dispatch(listUserArticles(username));

    return () => dispatch(resetUserDetails());
  }, [dispatch, username]);

  const AllPosts = (
    <div className="profile__no-data">
      <img className="profile__not-found-image" src={constructionImage} />
      Coming Soon!
    </div>
  );

  const Mumbles = (
    <div>
      {!isPostsLoading ? (
        posts.length === 0 ? (
          <div className="profile__no-data">
            <img className="profile__not-found-image" src={justSaying} />
            Oh no.. there are no mumbles!
          </div>
        ) : (
          <FeedCard posts={posts} />
        )
      ) : (
        <PostCardPlaceholder />
      )}
    </div>
  );

  const Articles = (
    <div>
      {auth.user.username === username && (
        <div className="profile__actions">
          <Button to="/create-article" text="Create Article" />
        </div>
      )}
      {articlesLoading && <div>Loading articles...</div>}
      {!articlesLoading && (
        <div>
          {articles.length === 0 && (
            <div className="profile__no-data">
              <img className="profile__not-found-image" src={postsImage} />
              Oh no.. there are no articles!
            </div>
          )}
          {articles.length > 0 &&
            articles.map((article) => (
              <Card key={article.id}>
                <div className="profile-article">
                  <img src={banner} className="profile-article__image" />
                  <div className="profile-article__title">{article.title}</div>
                  <div className="profile-article__description">{article.content}</div>

                  <div className="profile-article__actions">
                    <Button text="Continue Reading" to={`/article/${article.id}`} />
                  </div>
                </div>
              </Card>
            ))}
        </div>
      )}
    </div>
  );

  const Discussions = (
    <div className="profile__no-data">
      <img className="profile__not-found-image" src={constructionImage} />
      Coming Soon!
    </div>
  );

  return (
    <Page>
      <section>
        <Tabs
          tabs={[
            {
              title: 'All Posts',
              component: AllPosts,
            },
            {
              title: 'Mumbles',
              component: Mumbles,
            },
            {
              title: 'Articles',
              component: Articles,
            },
            {
              title: 'Discussions',
              component: Discussions,
            },
          ]}
        />
      </section>

      <section>
        {!isUserLoading && userProfile ? (
          <div>
            <UserCard userProfile={userProfile} />
            <SkillTags tags={userProfile.skills} />
          </div>
        ) : (
          <UserCardPlaceholder />
        )}
      </section>
    </Page>
  );
};

export default Profile;
