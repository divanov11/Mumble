import React from 'react';
import { Link } from 'react-router-dom';

function TopicTags({ tags }) {
    return (
        <div className='card'>
            <div id='topics-wrapper' className='card__body'>
                <h5>Topics you follow</h5>
                <Link to='#'>More Topics</Link>
                <div className='line-break'></div>
                <div className='tags-wrapper'>
                    {tags.map((tag, index) => (
                        <div key={index} className='tag'>
                            <small>{tag}</small>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TopicTags;
