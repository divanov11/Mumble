import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Avatar = ({
  alt = 'User Avatar',
  className = '',
  size = 'md',
  src = 'https://randomuser.me/api/portraits/men/52.jpg',
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
  alt: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  src: PropTypes.string,
};

export default Avatar;
