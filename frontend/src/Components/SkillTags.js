import React from 'react'

function SkillTags({ tags }) {
    return (
        <div className="card">
            <div id="topics-wrapper" className="card-body">
                <h5>Skills</h5>
                <a href="#">Expand Skills</a>
                <div className="line-break"></div>
                <div className="tags-wrapper">

                    {tags.map((tag, index) => (
                        <div className="tag">
                            <small>{tag}</small>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillTags
