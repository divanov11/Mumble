import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Avatar from './Avatar';

const AuthorBox = ({
  size = 'small',
  avatarSrc = 'https://randomuser.me/api/portraits/men/52.jpg',
  url = '',
  name = '',
  handle = '@',
  className = '',
  children,
  ...others
}) => {
  const authorBoxClass = `${
    className && className + ' '
  }author-box author-box--${size}`;

  return (
    <Link to={url} className={authorBoxClass} {...others}>
      <Avatar size={size} alt={name} src={avatarSrc} />
      <div className="author-box__info">
        <p className="author-box__name">{name}</p>
        <small className="author-box__handle">@{handle}</small>
        {children}
      </div>
    </Link>
  );
};

AuthorBox.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  avatarSrc: PropTypes.string,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default AuthorBox;
