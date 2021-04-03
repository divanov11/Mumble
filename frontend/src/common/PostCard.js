import React from 'react';

import AuthorBox from './AuthorBox';
import PostAction from './PostAction';
import VotingWidget from './VotingWidget';
import { distanceDate } from '../utilities/formatDate';

const PostBox = ({ post, link, isComment = false, children, ...others }) => {
  const {
    user,
    created,
    vote_rank,
    content,
    comment_count,
    share_count,
  } = post;

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
        <p className="post-meta">{distanceDate(created)}</p>
      </div>
      <div className="post-contents">
        <VotingWidget votes={vote_rank} />
        <div className="post-body">
          {children}
          {content}
        </div>
      </div>

      <PostAction comments={comment_count} link={link} shares={share_count} />
    </div>
  );
};

export default PostBox;
