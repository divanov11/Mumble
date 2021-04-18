import React from 'react';

import '../styles/components/SearchBox.css';

const SearchByArticlesList = ({ articles }) => {
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
