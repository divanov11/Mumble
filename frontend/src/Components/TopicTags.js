import React from 'react';

function TopicTags({ tags }) {
  return (
    <div className="card">
      <div id="topics-wrapper" className="card-body">
        <h5>Topics you follow</h5>
        <a href="#">More Topics</a>
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
  );
}

export default TopicTags;
