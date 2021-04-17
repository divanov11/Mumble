import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tag = ({ className = '', text, outline = false, ...others }) => {
  return (
    <span className={classNames(className, 'tag', { 'tag--outline': outline })} {...others}>
      <small>{text}</small>
    </span>
  );
};

Tag.propTypes = {
  className: PropTypes.string,
  outline: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default Tag;
