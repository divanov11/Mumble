const VotingWidget = ({ voteRatio }) => {
  return (
    <div className="voting-widget">
      <i className="fas fa-arrow-alt-up vote-icon big-up-arrow"></i>
      <p className="big-vote-count">{voteRatio}</p>
      <i className="fas fa-arrow-alt-down vote-icon big-down-arrow"></i>
    </div>
  );
};

export default VotingWidget;
