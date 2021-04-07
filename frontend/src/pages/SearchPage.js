import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import '../styles/components/SearchPage.css';

import { articles, interests, skills, postsData } from '../data';

import { Card, PostCard } from '../common';

import { listUsers } from '../actions/userActions';
import { searchPosts } from '../actions/postActions';

const SearchPage = ({ history }) => {
  let keyword = history.location.search;

  let [categorySelected, setCategorySelected] = useState('category-users');

  let toggleCategory = (e, category) => {
    setCategorySelected(category);
    history.push(`/search`);

    let categories = document.getElementsByClassName('category-wrapper');
    let categoryButtons = document.getElementsByClassName('category-link');

    for (let i = 0; i < categoryButtons.length; i++) {
      categoryButtons[i].classList.remove('category-link--active');
    }

    for (let i = 0; i < categories.length; i++) {
      categories[i].classList.add('hidden');
    }

    let active = document.getElementById(category);
    active.classList.remove('hidden');
    e.target.classList.add('category-link--active');
  };

  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { users } = userList;

  const postSearchList = useSelector((state) => state.postSearchList);
  const { posts } = postSearchList;

  useEffect(() => {
    if (categorySelected === 'category-users') {
      dispatch(listUsers(keyword));
    } else if (categorySelected === 'category-posts') {
      dispatch(searchPosts(keyword));
    } else if (categorySelected === 'category-articles') {
      console.log('Load articles');
    } else if (categorySelected === 'category-skills') {
      console.log('Load skills');
    } else if (categorySelected === 'category-interests') {
      console.log('Load interests');
    }
  }, [dispatch, keyword, categorySelected]);

  return (
    <div id="search-page-layout" className="container">
      <div></div>

      <div>
        <div className="category-wrapper" id="category-users">
          {users.length > 0 ? (
            <div>
              {users.map((user, index) => (
                <div key={index} className="card">
                  <div className="card__body">
                    <Link to={`/profile/${user.username}`}>
                      <div className="search--item--wrapper--1">
                        <img alt="" className="avatar avatar--md" src={user.profile.profile_pic} />
                        <div>
                          <strong>{user.profile.name}</strong>
                          <small>@{user.username}</small>
                          <p>{user.profile.bio}</p>
                        </div>
                        <button className="btn btn--main--outline btn--sm">Follow</button>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h5>No Results found..</h5>
            </div>
          )}
        </div>

        <div className="category-wrapper hidden" id="category-articles">
          {articles.map((article, index) => (
            <div key={index} className="card">
              <div className="card__body">
                <div className="search--item--wrapper--2">
                  <img alt="" className="avatar--md" src={article.thumbnail} />
                  <div>
                    <strong>{article.title}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="category-wrapper hidden" id="category-posts">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Card key={post.id}>
                <div className="post-wrapper">
                  <PostCard post={post} link={'/'} />
                </div>
              </Card>
            ))
          ) : (
            <div>
              <h5>No Results found..</h5>
            </div>
          )}
        </div>

        <div className="category-wrapper hidden" id="category-skills">
          {skills.map((skill, index) => (
            <div key={index} className="card">
              <div className="card__body">
                <div className="search--item--wrapper--1">
                  <strong>{skill}</strong>

                  <a href="/" className="btn btn--main--outline btn--sm">
                    Add SKill
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="category-wrapper hidden" id="category-interests">
          {interests.map((interest, index) => (
            <div key={index} className="card">
              <div className="card__body">
                <div className="search--item--wrapper--1">
                  <strong>{interest}</strong>

                  <a href="/" className="btn btn--main--outline btn--sm">
                    Add Interest
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="card card--dark" id="search-categories">
          <div className="card__body">
            <h5>Search by:</h5>
            <p
              className="category-link category-link--active"
              onClick={(e) => {
                toggleCategory(e, 'category-users');
              }}
            >
              Users
            </p>
            <p
              className="category-link"
              onClick={(e) => {
                toggleCategory(e, 'category-posts');
              }}
            >
              Posts
            </p>
            <p
              className="category-link"
              onClick={(e) => {
                toggleCategory(e, 'category-articles');
              }}
            >
              Articles
            </p>

            {/* <p
              className="category-link"
              onClick={(e) => {
                toggleCategory(e, 'category-skills');
              }}
            >
              Skills
            </p>
            <p
              className="category-link"
              onClick={(e) => {
                toggleCategory(e, 'category-interests');
              }}
            >
              Interests
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
