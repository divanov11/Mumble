import React from 'react';
import { Link } from 'react-router-dom';

const SkillList = ({ tags }) => {
  return (
    <div className="tags-wrapper">
      {tags.map((tag) => (
        <Link key={tag.name} to={`/tags?skill=${tag.name}`}>
          <div className="tag">
            <small>{tag.name}</small>
          </div>
        </Link>
      ))}
      {tags.length === 0 && <div>They are a skilless developer...</div>}
    </div>
  );
};

export default SkillList;
