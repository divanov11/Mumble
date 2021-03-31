import React from 'react';
import { Link } from 'react-router-dom';
import Contributors from '../Components/Contributors';
import DiscussionsCard from '../Components/DiscussionsCard';

import '../Css/Discussion.css';
import userData from '../data/users';
import discussions from '../data/discussions';

function Discussion({ match }) {
    let discussion = discussions.find((d) => d.slug === match.params.slug);
    let relatedQuestions = discussions.filter(
        (d) => d.slug !== match.params.slug
    );

    return (
        <div id='discussion-container'>
            <section>
                <div className='card'>
                    <div className='card-body'>
                        <div className='question-wrapper'>
                            <div className='question-sidebar'>
                                <img
                                    alt='img-description'
                                    className='user-thumbnail user-thumbnail-sm'
                                    src={discussion.user.profile_pic}
                                />
                                <div className='custom-spacer'></div>

                                <i className='fas fa-arrow-alt-up vote-icon big-up-arrow'></i>
                                <p className='big-vote-count'>
                                    {discussion.vote_ratio}
                                </p>
                                <i className='fas fa-arrow-alt-down vote-icon big-down-arrow'></i>
                            </div>
                            <div className='question-body'>
                                <h1 className='discussion-headline'>
                                    {discussion.headline}
                                </h1>
                                <p className='asked-by'>
                                    Asked by{' '}
                                    <Link
                                        to={`/profile/${discussion.user.username}`}
                                    >
                                        {discussion.user.name}
                                    </Link>{' '}
                                    {discussion.created}
                                </p>

                                <div className='line-break'></div>

                                <div className='tags-wrapper'>
                                    {discussion.tags.map((tag) => (
                                        <div className='tag'>
                                            <small>{tag}</small>
                                        </div>
                                    ))}
                                </div>
                                <div className='line-break'></div>
                                <p>{discussion.body}</p>
                                <div className='custom-spacer'></div>
                                <h6>3 Answers</h6>
                                <div className='line-break'></div>

                                {discussion.answers.map((answer) => (
                                    <div className='question-wrapper'>
                                        <div className='question-sidebar'>
                                            <img
                                                alt='img-description'
                                                className='user-thumbnail user-thumbnail-sm'
                                                src={answer.user.profile_pic}
                                            />
                                            <div className='custom-spacer'></div>

                                            <i className='fas fa-arrow-alt-up vote-icon big-up-arrow'></i>
                                            <p className='big-vote-count'>
                                                {answer.vote_ratio}
                                            </p>
                                            <i className='fas fa-arrow-alt-down vote-icon big-down-arrow'></i>
                                        </div>
                                        <div className='question-body'>
                                            <Link
                                                to={`/profile/${answer.user.username}`}
                                            >
                                                <h6>
                                                    {answer.user.name}{' '}
                                                    <small>
                                                        <i>
                                                            {' '}
                                                            @
                                                            {
                                                                answer.user
                                                                    .username
                                                            }
                                                        </i>
                                                    </small>
                                                </h6>
                                            </Link>
                                            <p>{answer.content}</p>
                                            <div className='custom-spacer'></div>
                                            <div className='line-break'></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='right-sidebar'>
                <Contributors users={userData} />
                <DiscussionsCard discussions={relatedQuestions} />
            </section>
        </div>
    );
}

export default Discussion;
