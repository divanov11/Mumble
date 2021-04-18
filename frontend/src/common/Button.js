import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  children,
  className = '',
  color = '',
  iconName = '',
  iconStyle = 'fas',
  link = false,
  outline = false,
  size = '',
  text = '',
  ...others
}) => {
  return (
    <button
      className={classNames(className, 'btn', {
        'btn--main': color === 'main' && !outline && !link,
        'btn--main--outline': color === 'main' && outline,
        'btn--main--link': color === 'main' && link,
        'btn--sub': color === 'sub' && !outline && !link,
        'btn--sub--outline': color === 'sub' && outline,
        'btn--sub--link': color === 'sub' && link,
        [`btn--${size}`]: size,
      })}
      {...others}
    >
      {iconName && <i className={`${iconStyle} fa-${iconName}`} style={{ marginRight: '8px' }}></i>}
      {text} {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['main', 'sub']),
  iconName: PropTypes.string,
  iconStyle: PropTypes.string,
  link: PropTypes.bool,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  text: PropTypes.string,
};

export default Button;
