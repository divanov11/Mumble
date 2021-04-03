import React from 'react';
import { Link } from 'react-router-dom';
import Contributors from '../components/Contributors';
import DiscussionsCard from '../components/DiscussionsCard';

import '../styles/components/Discussion.css';
import userData from '../data/users';
import discussions from '../data/discussions';
import VotingWidget from '../common/VotingWidget';
import Avatar from '../common/Avatar';

function Discussion({ match }) {
  let discussion = discussions.find((d) => d.slug === match.params.slug);
  let relatedQuestions = discussions.filter(
    (d) => d.slug !== match.params.slug,
  );

  return (
    <div className="container discussion--layout">
      <section>
        <div className="card">
          <div className="card__body">
            <div className="question-wrapper">
              <div className="question-sidebar">
                <Avatar
                  alt="img-description"
                  src={discussion.user.profile_pic}
                />
                <div className="custom-spacer"></div>
                <VotingWidget voteRatio={discussion.vote_ratio} />
              </div>
              <div className="question-body">
                <h1 className="discussion-headline">{discussion.headline}</h1>
                <p className="asked-by">
                  Asked by{' '}
                  <Link to={`/profile/${discussion.user.username}`}>
                    {discussion.user.name}
                  </Link>{' '}
                  {discussion.created}
                </p>

                <div className="line-break"></div>

                <div className="tags-wrapper">
                  {discussion.tags.map((tag) => (
                    <div key={tag} className="tag">
                      <small>{tag}</small>
                    </div>
                  ))}
                </div>
                <div className="line-break"></div>
                <p>{discussion.body}</p>
                <div className="custom-spacer"></div>
                <h6>3 Answers</h6>
                <div className="line-break"></div>

                {discussion.answers.map((answer) => (
                  <div key={answer.id} className="question-wrapper">
                    <div className="question-sidebar">
                      <Avatar
                        alt="img-description"
                        src={answer.user.profile_pic}
                      />
                      {/* <div className="custom-spacer"></div> */}
                      <VotingWidget voteRatio={answer.vote_ratio} />
                    </div>
                    <div className="question-body">
                      <Link to={`/profile/${answer.user.username}`}>
                        <h6>
                          {answer.user.name}{' '}
                          <small>
                            <i> @{answer.user.username}</i>
                          </small>
                        </h6>
                      </Link>
                      <p>{answer.content}</p>
                      <div className="custom-spacer"></div>
                      <div className="line-break"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="right-sidebar">
        <Contributors users={userData} />
        <DiscussionsCard discussions={relatedQuestions} />
      </section>
    </div>
  );
}

export default Discussion;
