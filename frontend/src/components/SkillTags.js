import React from 'react';
import { Link } from 'react-router-dom';

const SkillTags = ({ tags }) => {
  return (
    <div className="card">
      <div id="topics-wrapper" className="card__body">
        <h5>Skills</h5>
        <Link className="expand-skills__link" to="#">
          Expand Skills
        </Link>
        <div className="line-break"></div>
        <div className="tags-wrapper">
          {tags.map((tag, index) => (
            <div key={index} className="tag">
              <small>{tag}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillTags;
