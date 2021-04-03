import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tag = ({ text, outline = false, className = '', ...others }) => {
  return (
    <span
      className={classNames(className, 'tag', { 'tag--outline': outline })}
      {...others}
    >
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
