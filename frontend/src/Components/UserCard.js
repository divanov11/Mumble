import React from 'react'

function UserCard({ user }) {
    return (
        <div className="card">
            <div className="card-body">
                <div id="user-profile-summary">
                    <img alt="img-description" id="profile_pic" className="user-thumbnail user-thumbnail-lg" src={user.profile_pic} />
                    <h1 id="user-profile-name">{user.name}</h1>
                    <i>@{user.username}</i>
                    <div className="custom-spacer"></div>
                    <p>{user.bio}</p>
                    <div id="profile-stats-wrapper">
                        <div>
                            {Math.sign(user.vote_ratio) === -1 ? <h6>{user.vote_ratio}</h6> : <h6>+{user.vote_ratio}</h6>}


                            <i>Vote Ratio</i>
                        </div>
                        <div>
                            <h6>{user.followers}</h6>
                            <i>Followers</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard
