import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '../common/Avatar';

export const PostComment = ({ comment }) => {
  return (
    <div key={comment.id} className="post-comment">
      <div className="post-header-wrapper">
        <Avatar
          src={comment.user.profile_pic}
          alt="img-description"
          size="small"
        />
        <Link
          className="post-user-name"
          to={`/profile/${comment.user.username}`}
        >
          <strong>{comment.user.name}</strong>
        </Link>
        <p className="post-meta">@{comment.user.username} .</p>
        <p className="post-meta">{comment.created}</p>
      </div>
      <i className="replying-to-text">
        <small>
          Replying to{' '}
          {comment.reply_at.map((user) => (
            <span key={user.id}>- @{user.username}</span>
          ))}
        </small>
      </i>
      <div className="post-contents">
        <div className="post-votes">
          <i className="fas fa-arrow-alt-up vote-icon up-arrow"></i>
          <p className="vote-count">{comment.vote_rank}</p>
          <i className="fas fa-arrow-alt-down vote-icon down-arrow"></i>
        </div>
        <div className="post-body">
          <p>{comment.content}</p>
        </div>
      </div>

      <div className="post-actions-wrapper">
        <div className="action-wrapper">
          <i className="fas fa-comments"></i>
          <span className="post-action-text">{comment.comment_count}</span>
        </div>

        <div className="action-wrapper">
          <div className="post-comment-wrapper">
            <i className="fas fa-comment-lines"> </i>
            <span className="post-action-text">Comment</span>
          </div>
        </div>

        <div className="action-wrapper">
          <i className="fas fa-megaphone"></i>
          <span className="post-action-text">{comment.share_count}</span>
        </div>
      </div>
    </div>
  );
};
