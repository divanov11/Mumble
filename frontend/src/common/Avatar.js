import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({
  src = 'https://randomuser.me/api/portraits/men/52.jpg',
  size = 'medium',
  alt = 'User Avatar',
  className = '',
  ...others
}) => {
  let avatarSize = 'md';
  if (size === 'small') avatarSize = 'sm';
  else if (size === 'large') avatarSize = 'lg';
  else if (size === 'larger') avatarSize = 'xl';

  const avatarClass = `${
    className && className + ' '
  }avatar avatar--${avatarSize}`;

  return <img className={avatarClass} alt={alt} src={src} {...others} />;
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'larger']),
  className: PropTypes.string,
};

export default Avatar;
