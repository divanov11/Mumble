import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Avatar from './Avatar';

const AuthorBox = ({
  size = 'small',
  url = '',
  name = '',
  handle = '@',
  className = '',
  avatarSrc = 'https://randomuser.me/api/portraits/men/52.jpg',
  ...others
}) => {
  return (
    <Link
      to={url}
      className={classNames(className, 'author-box', `author-box--${size}`)}
      {...others}
    >
      <Avatar size={size} alt={name} src={avatarSrc} />
      <div className="author-box__info">
        <p className="author-box__name">{name}</p>
        <small className="author-box__handle">@{handle}</small>
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
