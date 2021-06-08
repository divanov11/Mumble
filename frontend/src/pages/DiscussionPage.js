import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/DiscussionPage.css';

import { Avatar, VotingWidget } from '../common';
import { Contributors, Page } from '../components';
import { discussions } from '../data';
import { getImageUrl } from '../utilities/getImageUrl';

const Discussion = ({ match }) => {
  let discussion = discussions.find((d) => d.slug === match.params.slug);

  let [users, setUsers] = useState([]);

  let fetchUsers = () => {
    fetch(`/api/users`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.slice(0, 3));
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Page>
      <section>
        <div className="card">
          <div className="card__body">
            <div className="question-wrapper">
              <div className="question-sidebar">
                <Avatar alt="img-description" src={getImageUrl(discussion.user.profile_pic)} />
                <div className="custom-spacer"></div>
                <VotingWidget votes={discussion.vote_ratio} />
              </div>
              <div className="question-body">
                <h1 className="discussion-headline">{discussion.headline}</h1>
                <p className="asked-by">
                  Asked by{' '}
                  <Link to={`/profile/${discussion.user.username}`}>{discussion.user.name}</Link>{' '}
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
                      <Avatar alt="img-description" src={getImageUrl(answer.user.profile_pic)} />
                      {/* <div className="custom-spacer"></div> */}
                      <VotingWidget votes={answer.vote_ratio} />
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
        <Contributors users={users} />
      </section>
    </Page>
  );
};

export default Discussion;
