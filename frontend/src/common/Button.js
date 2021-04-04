import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  color = '',
  size = '',
  outline = false,
  link = false,
  className = '',
  text = '',
  iconStyle = 'fas',
  iconName = '',
  children,
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
      {iconName && (
        <i
          className={`${iconStyle} fa-${iconName}`}
          style={{ marginRight: '8px' }}
        ></i>
      )}
      {text} {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['main', 'sub']),
  size: PropTypes.oneOf(['sm', 'lg']),
  className: PropTypes.string,
  outline: PropTypes.bool,
  link: PropTypes.bool,
  iconName: PropTypes.string,
  iconStyle: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
