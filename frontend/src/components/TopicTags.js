import React from 'react';
import { Link } from 'react-router-dom';

import { Tag } from '../common';

const TopicTags = ({ tags }) => {
  return (
    <div className="card">
      <div className="card__header">
        <h5 className="card__headerTitle">Topics you follow</h5>
        <Link className="card__link" to="#">
          More Topics
        </Link>
      </div>
      <div id="topics-wrapper" className="card__body">
        <div className="tags-wrapper">
          {tags.map((tag, index) => (
            <Tag text={tag} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicTags;
