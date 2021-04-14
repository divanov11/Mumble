import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getApiUrl } from '../services/config';

import AuthorBox from './AuthorBox';
import PostAction from './PostAction';
import VotingWidget from './VotingWidget';
import { formatDate } from '../utilities/';
import { getPostComments } from '../actions/postActions';

const PostCard = ({ post, link, isComment = false, children, ...others }) => {
  const {
    user,
    created,
    vote_rank,
    content,
    //comments,
    comment_count,
    share_count,
    remumble,
  } = post;
  if (remumble) {
    console.log(remumble.content);
  }
  let dispatch = useDispatch();

  let [comments, setComments] = useState([]);

  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
    dispatch(getPostComments(setComments, post.id));
  };

  return (
    <div className={`${isComment && 'post-card--comment'}`} {...others}>
      {remumble ? (
        <div className={`${isComment && 'post-card--comment'}`} {...others}>
          <div className="remumbled-note">
            <i className="fas fa-paper-plane"></i>
            <i>{user.username} remumbled</i>
          </div>
          <div className="post-header-wrapper">
            <AuthorBox
              avatarSrc={getApiUrl(remumble.user.profile_pic)}
              name={remumble.user.name}
              handle={remumble.user.username}
              url={`/profile/${remumble.user.username}`}
              size={isComment ? 'sm' : 'md'}
            />
            <p className="post-meta">{formatDate.distanceDate(created)}</p>
          </div>
          <div className="post-contents">
            <VotingWidget votes={vote_rank} />
            <div className="post-body">
              {children}

              {remumble.content}
            </div>
          </div>
          <PostAction
            onMessageIconClick={toggleComments}
            comments={remumble.comment_count}
            link={link}
            postId={remumble.id}
            shares={remumble.share_count}
            setComments={setComments}
          />
          {showComments && (
            <div className="post-comments-wrapper">
              {remumble.comments.map((comment) => (
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
      ) : (
        <div className={`${isComment && 'post-card--comment'}`} {...others}>
          <div className="post-header-wrapper">
            <AuthorBox
              avatarSrc={getApiUrl(user.profile_pic)}
              name={user.name}
              handle={user.username}
              url={`/profile/${user.username}`}
              size={isComment ? 'sm' : 'md'}
            />
            <p className="post-meta">{formatDate.distanceDate(created)}</p>
          </div>
          <div className="post-contents">
            <VotingWidget votes={vote_rank} />
            <div className="post-body">
              {children}

              {content}
            </div>
          </div>
          <PostAction
            onMessageIconClick={toggleComments}
            comments={comment_count}
            link={link}
            postId={post.id}
            shares={share_count}
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
      )}
    </div>
  );
};

export default PostCard;
