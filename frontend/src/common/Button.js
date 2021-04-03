import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  buttonStyle = '',
  size = '',
  outline = false,
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
        'btn--main--outline': buttonStyle === 'main' && outline,
        'btn--main': buttonStyle === 'main' && !outline,
        'btn--sub--outline': buttonStyle === 'sub' && outline,
        'btn--sub': buttonStyle === 'sub' && !outline,
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
  buttonStyle: PropTypes.oneOf(['main', 'sub']),
  size: PropTypes.oneOf(['sm', 'lg']),
  className: PropTypes.string,
  outline: PropTypes.bool,
  iconName: PropTypes.string,
  iconStyle: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
