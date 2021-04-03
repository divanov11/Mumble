import React from 'react';
import PropTypes from 'prop-types';

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
  const btnClass = ['btn'];

  if (buttonStyle) {
    if (buttonStyle === 'main')
      btnClass.push(outline === true ? 'btn--main--outline' : 'btn--main');
    else if (buttonStyle === 'sub')
      btnClass.push(outline === true ? 'btn--sub--outline' : 'btn--sub');
  }

  if (size) btnClass.push(`btn--${size}`);
  if (className) btnClass.push(className);

  return (
    <button className={btnClass.join(' ')} {...others}>
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
