import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../common/Avatar';

function Feed({ posts }) {
  return (
    <section>
      {posts.map((post) => (
        <div key={post.id} className="card">
          <div className="card__body">
            <div className="post-wrapper">
              <div className="post-header-wrapper">
                <Avatar src={post.user.profile_pic} alt="img-description" />
                <Link
                  className="post-user-name"
                  to={`/profile/${post.user.username}`}
                >
                  <h6>{post.user.name}</h6>
                </Link>
                <p className="post-meta">@{post.user.username} .</p>
                <p className="post-meta">{post.created}</p>
              </div>
              <div className="post-contents">
                <div className="post-votes">
                  <i className="fas fa-arrow-alt-up vote-icon up-arrow"></i>
                  <p className="vote-count">{post.vote_rank}</p>
                  <i className="fas fa-arrow-alt-down vote-icon down-arrow"></i>
                </div>
                <div className="post-body">
                  <p>{post.content}</p>
                </div>
              </div>

              <div className="post-actions-wrapper">
                <div className="action-wrapper">
                  <i className="fas fa-comments"></i>
                  <span className="post-action-text">{post.comment_count}</span>
                </div>

                <div className="action-wrapper">
                  <div role="button" className="post-comment-wrapper">
                    <i className="fas fa-comment-lines"> </i>
                    <span className="post-action-text">Comment</span>
                  </div>
                </div>

                <div className="action-wrapper">
                  <i className="fas fa-megaphone"></i>
                  <span className="post-action-text">{post.share_count}</span>
                </div>
              </div>

              <div className="post-comments-wrapper">
                {post.comments.map((comment) => (
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
                        <span className="post-action-text">
                          {comment.comment_count}
                        </span>
                      </div>

                      <div className="action-wrapper">
                        <div className="post-comment-wrapper">
                          <i className="fas fa-comment-lines"> </i>
                          <span className="post-action-text">Comment</span>
                        </div>
                      </div>

                      <div className="action-wrapper">
                        <i className="fas fa-megaphone"></i>
                        <span className="post-action-text">
                          {comment.share_count}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Feed;
