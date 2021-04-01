import React from "react";
import { Link } from "react-router-dom";


const ArticlesCard=({ articles })=> {

  return (
    <div className="card card--dark">
      <div className="card__body">
        <h5>Popular Articles</h5>
        <Link to="#">Write a Post</Link>
        <div className="custom-spacer"></div>

        {articles.map((article) => (
          <div key={article.id} className="snippet-wrapper">
            <Link to={`/`} className="snippet-engagement-count">
              <p>{article.vote_rank}</p>
            </Link>
            <Link to={"/"} className="snippet-teaser">
              <p className="snippet-text">{article.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticlesCard;
