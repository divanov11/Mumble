import React from 'react';

const VotingWidget = ({ votes }) => {
  return (
    <div className="post-votes">
      <i className="fas fa-chevron-up vote-icon up-arrow"></i>
      <p className="vote-count">{votes}</p>
      <i className="fas fa-chevron-down vote-icon down-arrow"></i>
    </div>
  );
};

export default VotingWidget;
