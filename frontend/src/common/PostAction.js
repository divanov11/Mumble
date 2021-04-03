import React from 'react';
import { Link } from 'react-router-dom';

const PostAction = ({ comments, shares, link }) => {
  return (
    <div className="post-actions-wrapper">
      <div className="action-wrapper">
        <i className="fas fa-comments"></i>
        <span className="post-action-text">{comments}</span>
      </div>

      <div className="action-wrapper">
        <Link to={link} role="button" className="post-comment-wrapper">
          <i className="fas fa-comment-lines"> </i>
          <span className="post-action-text">Comment</span>
        </Link>
      </div>

      <div className="action-wrapper">
        <i className="fas fa-paper-plane"></i>
        <span className="post-action-text">{shares}</span>
      </div>
    </div>
  );
};

export default PostAction;
