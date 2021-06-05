import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { modifyVote } from '../actions/postActions';

const VotingWidget = ({
  votes,
  postId,
  postUsername,
  upVoters,
  downVoters,
  authUserId,
  remumbledPost,
}) => {
  const dispatch = useDispatch();

  const isUpVoted = upVoters.find((vote) => vote.id === authUserId);
  const isDownVoted = downVoters.find((vote) => vote.id === authUserId);

  return (
    <div className="post-votes">
      <i
        onClick={() =>
          dispatch(
            modifyVote({
              post_id: remumbledPost?.original_mumble.id || postId,
              value: 'upvote',
              post_username: postUsername,
              remumbled_post: remumbledPost,
            }),
          )
        }
        className={`${isUpVoted ? 'fas' : 'far'} fa-caret-up vote-icon up-arrow`}
      ></i>

      {votes === 0 ? (
        <p className="vote-count vote-count__negative">{votes}</p>
      ) : votes > 0 ? (
        <p className="vote-count">+{votes}</p>
      ) : (
        <p className="vote-count vote-count__negative">{votes}</p>
      )}

      <i
        onClick={() =>
          dispatch(
            modifyVote({
              post_id: remumbledPost?.original_mumble.id || postId,
              value: `${isUpVoted ? 'upvote' : 'downvote'}`,
              post_username: postUsername,
              remumbled_post: remumbledPost,
            }),
          )
        }
        className={`${isDownVoted ? 'fas' : 'far'} fa-caret-down vote-icon down-arrow`}
      ></i>
    </div>
  );
};

VotingWidget.propTypes = {
  authUserId: PropTypes.number,
  downVoters: PropTypes.array,
  postId: PropTypes.string,
  postUsername: PropTypes.string,
  upVoters: PropTypes.array,
  votes: PropTypes.number.isRequired,
};

export default VotingWidget;
