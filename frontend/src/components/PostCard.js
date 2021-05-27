import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Linkify from 'react-linkify';

import PostAction from './PostAction';
import { AuthorBox, VotingWidget } from '../common';
import { getPostComments } from '../actions/postActions';
import PostCardOptions from './PostCardOptions';

const PostCard = ({ post, link, isComment = false, children, ...others }) => {
  let auth = useSelector((state) => state.auth);
  let dispatch = useDispatch();

  let authUser = auth.user;
  let authUserId = String(authUser.id);
  let postId = String(post.id);

  let [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const { user, original_mumble } = post;
  let remumble;

  if (original_mumble) {
    remumble = {
      isMyRemumble: authUser.id === post.user.user,
      remumbleId: post.id,
      remumbleUserId: post.user.user,
      originalMumbleId: original_mumble.id,
      originalUserId: original_mumble.user.user,
    };
    post = original_mumble;
  }

  const toggleComments = (newComment = false) => {
    if (newComment === true) {
      setShowComments(true);
    } else {
      setShowComments(!showComments);
    }
    dispatch(getPostComments(setComments, post.id));
  };

  return (
    <Linkify>
      <div className={`${isComment && 'post-card--comment'}`} {...others}>
        {original_mumble && (
          <div className="remumbled-note">
            <i className="fas fa-paper-plane"></i>
            <i>{user.username} remumbled</i>
          </div>
        )}
        <div className="post-header-wrapper">
          <AuthorBox
            avatarSrc={post.user.profile_pic}
            name={post.user.name}
            handle={post.user.username}
            url={`/profile/${post.user.username}`}
            size="sm"
          />
          <PostCardOptions post={post} remumble={remumble} />
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
        )}
      </div>
    </Linkify>
  );
};

export default PostCard;
