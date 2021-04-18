import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Avatar from './Avatar';

const AuthorBox = ({
  avatarSrc = '',
  className = '',
  handle = '',
  name = '',
  size = 'sm',
  url = '',
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
        {handle && <small className="author-box__handle">@{handle}</small>}
      </div>
    </Link>
  );
};

AuthorBox.propTypes = {
  avatarSrc: PropTypes.string,
  className: PropTypes.string,
  handle: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  url: PropTypes.string.isRequired,
};

export default AuthorBox;
