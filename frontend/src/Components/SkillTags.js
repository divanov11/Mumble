import React from 'react';
import { Link } from 'react-router-dom';

function SkillTags({ tags }) {
    return (
        <div className='card'>
            <div id='topics-wrapper' className='card-body'>
                <h5>Skills</h5>
                <Link to='#'>Expand Skills</Link>
                <div className='line-break'></div>
                <div className='tags-wrapper'>
                    {tags.map((tag, index) => (
                        <div className='tag'>
                            <small>{tag}</small>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SkillTags;
