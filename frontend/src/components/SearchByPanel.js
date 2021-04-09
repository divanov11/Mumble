import React from 'react';
import classNames from 'classnames';

import '../styles/components/SearchByPanel.css';

export const CATEGORY_USERS = 'CATEGORY_USERS';
export const CATEGORY_POSTS = 'CATEGORY_POSTS';
export const CATEGORY_ARTICLES = 'CATEGORY_ARTICLES';
export const CATEGORY_SKILLS = 'CATEGORY_SKILLS';
export const CATEGORY_INTERESTS = 'CATEGORY_INTERESTS';

const SearchByPanel = ({ category, setCategory }) => {
  return (
    <div className="search-categories card card--dark">
      <div className="card__body">
        <h5>Search by:</h5>
        <p
          className={classNames('category-link', {
            'category-link--active': category === CATEGORY_USERS,
          })}
          onClick={() => setCategory(CATEGORY_USERS)}
        >
          Users
        </p>
        <p
          className={classNames('category-link', {
            'category-link--active': category === CATEGORY_POSTS,
          })}
          onClick={() => setCategory(CATEGORY_POSTS)}
        >
          Posts
        </p>
        <p
          className={classNames('category-link', {
            'category-link--active': category === CATEGORY_ARTICLES,
          })}
          onClick={() => setCategory(CATEGORY_ARTICLES)}
        >
          Articles
        </p>
      </div>
    </div>
  );
};

export default SearchByPanel;
