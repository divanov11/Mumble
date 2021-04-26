import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getApiUrl } from '../services/config';
import PostAction from './PostAction';
import { AuthorBox, VotingWidget } from '../common';
import { getPostComments } from '../actions/postActions';
import PostCardOptions from './PostCardOptions';

const PostCard = ({ post, link, isComment = false, children, ...others }) => {
  const { user, original_mumble } = post;
  if (original_mumble) {
    post = original_mumble;
  }

  let dispatch = useDispatch();

  let auth = useSelector((state) => state.auth);
  let authUser = auth.user;
  let authUserId = String(authUser.id);
  let postId = String(post.id);

  let [comments, setComments] = useState([]);

  const [showComments, setShowComments] = useState(false);

  const toggleComments = (newComment = false) => {
    if (newComment === true) {
      setShowComments(true);
    } else {
      setShowComments(!showComments);
    }
    dispatch(getPostComments(setComments, post.id));
  };

  return (
    <div className={`${isComment && 'post-card--comment'}`} {...others}>
      {original_mumble && (
        <div className="remumbled-note">
          <i className="fas fa-paper-plane"></i>
          <i>{user.username} remumbled</i>
        </div>
      )}
      <div className="post-header-wrapper">
        <AuthorBox
          avatarSrc={getApiUrl(post.user.profile_pic)}
          name={post.user.name}
          handle={post.user.username}
          url={`/profile/${post.user.username}`}
          size={isComment ? 'sm' : 'md'}
        />
        <PostCardOptions post={post} />
      </div>
      <div className="post-contents">
        <VotingWidget
          votes={post.vote_rank}
          postId={postId}
          postUsername={post.user.username}
          upVoters={post.upVoters}
          downVoters={post.downVoters}
          authUserId={authUserId}
        />
        <div className="post-body">
          {children}
          {post.content}
        </div>
      </div>
      <PostAction
        onMessageIconClick={toggleComments}
        comments={post.comment_count}
        link={link}
        postId={post.id}
        shares={post.share_count}
        setComments={setComments}
      />
      {showComments && (
        <div className="post-comments-wrapper">
          {comments.map((comment) => (
            <div key={comment.id} className="post-comment">
              <PostCard post={comment} link={'/'} isComment={true}>
                <div className="comment__mentioned">
                  Replying to
                  {comment.reply_at?.map((user) => (
                    <span key={user.id}> @{user.username}</span>
                  ))}
                </div>
              </PostCard>
            </div>
          ))}
        </div>
      )}{' '}
    </div>
  );
};

export default PostCard;
