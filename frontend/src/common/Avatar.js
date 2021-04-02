import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({
  src = 'https://randomuser.me/api/portraits/men/52.jpg',
  size = 'medium',
  alt = 'User Avatar',
  className,
  ...others
}) => {
  let avatarClass = 'md';
  if (size === 'small') avatarClass = 'sm';
  else if (size === 'large') avatarClass = 'lg';
  else if (size === 'larger') avatarClass = 'xl';

  return (
    <img
      className={`avatar avatar--${avatarClass} ${className}`}
      alt={alt}
      src={src}
      {...others}
    />
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'larger']),
};

export default Avatar;
