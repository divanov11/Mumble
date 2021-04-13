import React, { useState } from 'react';
import classNames from 'classnames';
import { Prompt } from 'react-router-dom';

import Button from './Button';

const PostAction = ({ onMessageIconClick, comments, shares }) => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState('');

  const toggleCommentBox = () => setShowCommentBox((prev) => !prev);
  const handleCommentChange = (e) => setComment(e.target.value);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    window.onbeforeunload = null;
    alert(`${comment} \n comment Submitted!`);
    setComment('');
    toggleCommentBox();
  };

  window.onbeforeunload = function (e) {
    e.preventDefault();
    if (comment.trim()) {
      return "Discard changes?";
    }
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
          <i className="fas fa-comment-lines"> </i>
          <span className="post-action-text">Comment</span>
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
      <Prompt
      when={comment.length > 0}
      message="Do you want to leave without finishing your comment?"
      />
    </div>
  );
};

export default PostAction;
