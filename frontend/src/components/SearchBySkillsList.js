import React from 'react';

import '../styles/components/SearchBox.css';

const SearchBySkillsList = ({ skills }) => {
  return (
    <div className="category-wrapper" id="category-skills">
      {skills.map((skill, index) => (
        <div key={index} className="card">
          <div className="card__body">
            <div className="search--item--wrapper--1">
              <strong>{skill}</strong>

              <a href="/" className="btn btn--main--outline btn--sm">
                Add SKill
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchBySkillsList;
