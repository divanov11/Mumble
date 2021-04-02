import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ text, outline = false, className = '', ...others }) => {
  const tagClass = `${className && className + ' '}tag ${
    outline && 'tag--outline'
  }`;
  return (
    <span className={tagClass} {...others}>
      <small>{text}</small>
    </span>
  );
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  className: PropTypes.string,
};

export default Tag;
