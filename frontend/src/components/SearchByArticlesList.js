import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { resetSearchArticles, searchArticles } from '../actions/articleActions';

import '../styles/components/SearchBox.css';

const SearchByArticlesList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const keyword = location.search;

  const { data } = useSelector((state) => state.articleSearchList);
  const { results: articles } = data;

  useEffect(() => {
    dispatch(searchArticles(keyword));
    return () => {
      dispatch(resetSearchArticles());
    };
  }, [dispatch, keyword]);

  return (
    <div className="category-wrapper" id="category-articles">
      {articles.map((article, index) => (
        <div key={index} className="card">
          <div className="card__body">
            <div className="article-item">
              <Link to={`/article/${article.id}`}>
                <img alt="" className="avatar--md" src={article.thumbnail} />
                <div>
                  <strong>{article.title}</strong>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchByArticlesList;
