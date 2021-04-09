import React from 'react';

import '../styles/components/SearchBox.css';

const SearchByInterestsList = ({ interests }) => {
  return (
    <div className="category-wrapper" id="category-interests">
      {interests.map((interest, index) => (
        <div key={index} className="card">
          <div className="card__body">
            <div className="search--item--wrapper--1">
              <strong>{interest}</strong>

              <a href="/" className="btn btn--main--outline btn--sm">
                Add Interest
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchByInterestsList;
