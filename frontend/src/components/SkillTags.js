import React from 'react';
import SkillList from './SkillList';

const SkillTags = ({ tags }) => {
  return (
    <div className="card">
      <div id="topics-wrapper" className="card__body">
        <h5>Skills</h5>
        <div className="line-break"></div>
        <SkillList tags={tags} />
      </div>
    </div>
  );
};

export default SkillTags;
