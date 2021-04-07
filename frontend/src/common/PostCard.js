import React, { useState } from 'react';

import AuthorBox from './AuthorBox';
import PostAction from './PostAction';
import VotingWidget from './VotingWidget';
import { formatDate } from '../utilities/';

const PostCard = ({ post, link, isComment = false, children, ...others }) => {
  const {
    user,
    created,
    vote_rank,
    content,
    //comments,
    comment_count,
    share_count,
  } = post;

  let [comments, setComments] = useState([]);

  // TODO: Chunk this file to a Comment Card
  let fetchComments = () => {
    fetch(`https://mumbleapi.herokuapp.com/api/posts/${post.id}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      });
  };

  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
    fetchComments();
  };

  return (
    <div className={`${isComment && 'post-card--comment'}`} {...others}>
      <div className="post-header-wrapper">
        <AuthorBox
          avatarSrc={user.profile_pic}
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
        shares={share_count}
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
