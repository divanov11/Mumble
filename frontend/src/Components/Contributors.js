import React from 'react'
import { Link } from 'react-router-dom'


function Contributers({ users }) {
    console.log("users:", users)
    return (
        <div className="card">
            <div className="card-body">
                <h5>Top Contributors</h5>
                <div className="custom-spacer"></div>

                {users.map((user) => (
                    <div key={user.id} className="contributor-wrapper">
                        <div className="contributor-preview">
                            <img alt="img-description" className="user-thumbnail user-thumbnail-sm" src={user.profile_pic} />
                            <Link to={`/profile/${user.username}`}><h6>{user.name}</h6></Link>
                        </div>
                        <a className="btn btn-1-outline btn-sm" href="">Follow</a>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Contributers
