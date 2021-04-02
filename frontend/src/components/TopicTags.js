import React from 'react';
import { Link } from 'react-router-dom';
import Tag from '../common/Tag';

function TopicTags({ tags }) {
  return (
    <div className="card">
      <div id="topics-wrapper" className="card__body">
        <h5>Topics you follow</h5>
        <Link to="#">More Topics</Link>
        <div className="line-break"></div>
        <div className="tags-wrapper">
          {tags.map((tag, index) => (
            <Tag text={tag} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopicTags;
