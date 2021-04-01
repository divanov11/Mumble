import React from 'react';
import { Link } from 'react-router-dom';

function DiscussionsCard({ discussions }) {
  return (
    <div className="card card--dark">
      <div className="card__body">
        <h5>Discussions</h5>
        <Link to="#">Start a Discussion</Link>
        <div className="custom-spacer"></div>
        {discussions.map((discussion, index) => (
          <div key={index} className="snippet-wrapper">
            <Link
              className="snippet-engagement-count"
              to={`/discussion/${discussion.slug}`}
            >
              <p>{discussion.vote_ratio}</p>
            </Link>
            <div className="snippet-teaser">
              <Link to={`/discussion/${discussion.slug}`}>
                <p className="snippet-text">{discussion.headline}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiscussionsCard;
