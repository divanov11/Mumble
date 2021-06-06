import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Linkify from 'react-linkify';

import PostAction from './PostAction';
import { AuthorBox, VotingWidget } from '../common';
import { getPostComments } from '../actions/postActions';
import PostCardOptions from './PostCardOptions';
import { getImageUrl } from '../utilities/getImageUrl';

const PostCard = ({
  post,
  ancestors,
  link,
  isComment = false,
  commentsRerender,
  children,
  ...others
}) => {
  let auth = useSelector((state) => state.auth);
  let dispatch = useDispatch();

  let authUser = auth.user;
  let authUserId = authUser.id;
  let postId = String(post.id);

  let [comments, setComments] = useState([]);
  let [commentCount, setCommentCount] = useState(post.comment_count);
  const [showComments, setShowComments] = useState(false);

  const { user, original_mumble } = post;
  let remumble;
  let remumbledPost;

  if (original_mumble) {
    remumble = {
      isMyRemumble: authUser.id === post.user.user,
      remumbleId: post.id,
      remumbleUserId: post.user.user,
      originalMumbleId: original_mumble.id,
      originalUserId: original_mumble.user.user,
    };
    remumbledPost = post;
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

  const deleteComment = (comment) => {
    const commentToRemove = commentsRerender
      .map(function (item) {
        return item.id;
      })
      .indexOf(comment.id);
    commentsRerender.splice(commentToRemove, 1);

    setComments(commentsRerender);
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
            avatarSrc={getImageUrl(post.user.profile_pic)}
            name={post.user.name}
            handle={post.user.username}
            url={`/profile/${post.user.username}`}
            size="sm"
          />
          <PostCardOptions
            post={post}
            deletePostFromState={deleteComment}
            ancestors={ancestors}
            remumble={remumble}
          />
        </div>
        <div className="post-contents">
          <VotingWidget
            votes={post.vote_rank}
            postId={postId}
            postUsername={post.user.username}
            upVoters={post.up_voters}
            downVoters={post.down_voters}
            authUserId={authUserId}
            remumbledPost={remumbledPost}
          />
          <div className="post-body">
            {children}
            {post.content}
          </div>
        </div>
        <PostAction
          onMessageIconClick={toggleComments}
          comments={commentCount}
          link={link}
          postId={post.id}
          shares={post.share_count}
          setComments={setComments}
          setCommentCount={setCommentCount}
          ancestors={[...ancestors, setCommentCount]}
        />
        {showComments && (
          <div className="post-comments-wrapper">
            {comments.map((comment) => (
              <div key={comment.id} className="post-comment">
                <PostCard
                  commentsRerender={comments}
                  post={comment}
                  ancestors={[...ancestors, setCommentCount]}
                  link={'/'}
                  isComment={true}
                >
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
