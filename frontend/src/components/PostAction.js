import React, { useState } from 'react';
import classNames from 'classnames';
import { Prompt } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { createComment, createRemumble } from '../actions/postActions';

import Button from '../common/Button';

const PostAction = ({ onMessageIconClick, comments, shares, postId, setComments, ancestors }) => {
  let dispatch = useDispatch();

  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState('');

  const toggleCommentBox = () => {
    setShowCommentBox((prev) => !prev);
  };
  const handleCommentChange = (e) => setComment(e.target.value);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createComment(setComments, postId, { content: comment, isComment: true, postId: postId }),
    );
    let newComment = true;
    onMessageIconClick(newComment);
    for (let ancestor of ancestors) {
      ancestor((count) => count + 1);
    }
    setComment('');
    toggleCommentBox();
  };

  let toggleRemumble = () => {
    dispatch(createRemumble(postId));
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
          {/* <Link role="button" className="post-comment-wrapper"> */}
          <i className="fas fa-comment-lines"> </i>
          <span className="post-action-text">Comment</span>
          {/* </Link> */}
        </div>

        <div className="action-wrapper">
          <i onClick={toggleRemumble} className="fas fa-paper-plane"></i>
          <span onClick={toggleRemumble} className="post-action-text">
            {shares}
          </span>
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
