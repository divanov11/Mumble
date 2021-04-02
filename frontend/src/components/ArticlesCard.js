import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';

function ArticlesCard({ articles }) {
  return (
    <Card cardStyle="dark">
      <h5>Popular Articles</h5>
      <Link to="#">Write a Post</Link>
      <div className="custom-spacer" />

      {articles.map((article) => (
        <div key={article.id} className="snippet-wrapper">
          <div>
            <Link to={`/`} className="snippet-engagement-count">
              <p>{article.vote_rank}</p>
            </Link>
          </div>
          <div className="snippet-teaser">
            <Link to={'/'} className="snippet-teaser">
              <p className="snippet-text">{article.title}</p>
            </Link>
          </div>
        </div>
      ))}
    </Card>
  );
}

export default ArticlesCard;
