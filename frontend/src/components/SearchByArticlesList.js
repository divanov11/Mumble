import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { searchArticles } from '../actions/articleActions';

import '../styles/components/SearchBox.css';

const SearchByArticlesList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const keyword = location.search;
  const { articles } = useSelector((state) => state.articleSearchList);

  useEffect(() => {
    dispatch(searchArticles(keyword));
  }, [dispatch, keyword]);

  // const showResultsNotFound = articles.length === 0;

  return (
    <div className="category-wrapper" id="category-articles">
      {articles.map((article, index) => (
        <div key={index} className="card">
          <div className="card__body">
            <div className="article-item">
              <img alt="" className="avatar--md" src={article.thumbnail} />
              <div>
                <strong>{article.title}</strong>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchByArticlesList;
