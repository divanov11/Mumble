import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getApiUrl } from '../services/config';
import AuthorBox from './AuthorBox';
import PostAction from './PostAction';
import VotingWidget from './VotingWidget';
import { getPostComments } from '../actions/postActions';
import PostCardOptions from './PostCardOptions';

const PostCard = ({ post, link, isComment = false, children, ...others }) => {
  const { user, origional_mumble } = post;
  if (origional_mumble) {
    post = origional_mumble;
  }

  let dispatch = useDispatch();

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
      {origional_mumble && (
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
        <VotingWidget votes={post.vote_rank} />
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
