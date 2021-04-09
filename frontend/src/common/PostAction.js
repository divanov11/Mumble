import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import Button from './Button';

const PostAction = ({ onMessageIconClick, comments, shares }) => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState('');

  const toggleCommentBox = () => setShowCommentBox((prev) => !prev);
  const handleCommentChange = (e) => setComment(e.target.value);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    alert(`${comment} \n comment Submitted!`);
    setComment('');
    toggleCommentBox();
  };

  return (
    <div>
      <div className="post-actions-wrapper">
        <div
          onClick={onMessageIconClick}
          className={classNames('action-wrapper', {
            'action-wrapper--disabled': parseInt(comments) === 0,
          })}
        >
          <i className="fas fa-comments"></i>
          <span className="post-action-text">{comments}</span>
        </div>

        <div className="action-wrapper" onClick={toggleCommentBox}>
          <Link role="button" className="post-comment-wrapper">
            <i className="fas fa-comment-lines"> </i>
            <span className="post-action-text">Comment</span>
          </Link>
        </div>

        <div className="action-wrapper">
          <i className="fas fa-paper-plane"></i>
          <span className="post-action-text">{shares}</span>
        </div>
      </div>
      {/* comment Textarea */}
      {showCommentBox && (
        <form onSubmit={handleCommentSubmit}>
          <textarea
            className="input input--textarea input--textarea--sm"
            onChange={handleCommentChange}
            value={comment}
            autoFocus
            required
          ></textarea>
          <Button size="sm" color="main" type="submit">
            Submit
          </Button>
        </form>
      )}
    </div>
  );
};

export default PostAction;
