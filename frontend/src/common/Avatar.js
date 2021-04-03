import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({
  src = 'https://randomuser.me/api/portraits/men/52.jpg',
  size = 'md',
  alt = 'User Avatar',
  className = '',
  ...others
}) => {
  const avatarClass = `${className && className + ' '}avatar avatar--${size}`;
  return <img className={avatarClass} alt={alt} src={src} {...others} />;
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
};

export default Avatar;
