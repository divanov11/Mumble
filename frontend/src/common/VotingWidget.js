import React from 'react';
import { useDispatch } from 'react-redux';
import { modifyVote } from '../actions/postActions';

const VotingWidget = ({
  votes,
  post_id,
  post_username,
  post_userid,
  upVoters,
  downVoters,
  authUser,
}) => {
  let dispatch = useDispatch();

  let upVote = upVoters.includes(authUser.id);
  let downVote = downVoters.includes(authUser.id);

  return (
    <div className="post-votes">
      <i
        onClick={() =>
          dispatch(modifyVote({ post_id: post_id, value: 'upvote', post_username: post_username }))
        }
        className={`${upVote ? 'fas' : 'far'} fa-caret-up vote-icon up-arrow`}
      ></i>

      {votes === 0 ? (
        <p className="vote-count vote-count__negative">{votes}</p>
      ) : votes > 1 ? (
        <p className="vote-count">+{votes}</p>
      ) : (
        <p className="vote-count vote-count__negative">{votes}</p>
      )}

      <i
        onClick={() =>
          dispatch(
            modifyVote({ post_id: post_id, value: 'downvote', post_username: post_username }),
          )
        }
        className={`${downVote ? 'fas' : 'far'} fa-caret-down vote-icon down-arrow`}
      ></i>
    </div>
  );
};

export default VotingWidget;
