import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/SearchPage.css';

//Dummy Data Files
//import userData from '../data/users';
import articles from '../data/articles';
import skills from '../data/skills';
import interests from '../data/interests';

function SearchPage() {
  let toggleCategory = (e, category) => {
    let categories = document.getElementsByClassName('category-wrapper');
    let categoryButtons = document.getElementsByClassName('category-link');

    for (let i = 0; i < categoryButtons.length; i++) {
      categoryButtons[i].classList.remove('category-link--active');
    }

    for (let i = 0; i < categories.length; i++) {
      categories[i].classList.add('hidden');
    }

    let active = document.getElementById(category);
    console.log(active);
    active.classList.remove('hidden');
    e.target.classList.add('category-link--active');
  };

  let [userData, setUserdata] = useState([]);

  let fetchUsers = () => {
    fetch(`/api/users`)
      .then((response) => response.json())
      .then((data) => {
        setUserdata(data);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div id="search-page-layout" className="container">
      <div></div>

      <div>
        <div className="category-wrapper" id="category-people">
          {userData.map((user, index) => (
            <div key={index} className="card">
              <div className="card__body">
                <Link to={`/profile/${user.username}`}>
                  <div className="search--item--wrapper--1">
                    <img
                      alt=""
                      className="avatar avatar--md"
                      src={user.profile.profile_pic}
                    />
                    <div>
                      <strong>{user.profile.name}</strong>
                      <small>@{user.username}</small>
                      <p>{user.profile.bio}</p>
                    </div>
                    <button className="btn btn--main--outline btn--sm">
                      Follow
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
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
                toggleCategory(e, 'category-people');
              }}
            >
              People
            </p>
            {/* <p className="category-link" onClick={(e) => {toggleCategory(e, 'category-posts')}}>Posts</p> */}
            <p
              className="category-link"
              onClick={(e) => {
                toggleCategory(e, 'category-articles');
              }}
            >
              Articles
            </p>
            <p
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
