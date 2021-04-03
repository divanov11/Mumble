import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Avatar = ({
  src = 'https://randomuser.me/api/portraits/men/52.jpg',
  size = 'md',
  alt = 'User Avatar',
  className = '',
  ...others
}) => {
  return (
    <img
      className={classNames(className, 'avatar', `avatar--${size}`)}
      alt={alt}
      src={src}
      {...others}
    />
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
};

export default Avatar;
