import React from 'react'

function ArticlesCard({ articles }) {
  return (
    <div className="card card-dark">
      <div className="card-body">
        <h5>Popular Articles</h5>
        <a href="#">Write a Post</a>
        <div className="custom-spacer"></div>

        {articles.map((article) => (
          <div key={article.id} className="snippet-wrapper">
            <div className="snippet-engagement-count">
              <p>{article.vote_rank}</p>
            </div>
            <div className="snippet-teaser">
              <p className="snippet-text">{article.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArticlesCard
