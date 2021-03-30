import React from 'react'
import { Link } from 'react-router-dom'

function DiscussionsCard({ discussions }) {
    return (
        <div className="card card-dark">
            <div className="card-body">
                <h5>Discussions</h5>
                <a href="#">Start a Discussion</a>
                <div className="custom-spacer"></div>
                {discussions.map(discussion => (
                    <div className="snippet-wrapper">
                        <div className="snippet-engagement-count">
                            <p>{discussion.vote_ratio}</p>
                        </div>
                        <div className="snippet-teaser">
                            <Link to={`/discussion/${discussion.slug}`}>
                                <p className="snippet-text">{discussion.headline}</p>
                            </Link>
                        </div>
                    </div>
                ))}



            </div>
        </div>
    )
}

export default DiscussionsCard
