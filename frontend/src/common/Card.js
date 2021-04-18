import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Card = ({ cardStyle = '', className = '', children, ...others }) => {
  return (
    <div
      className={classNames(className, 'card', {
        'card--dark': cardStyle === 'dark',
      })}
      {...others}
    >
      <div className="card__body">{children}</div>
    </div>
  );
};

Card.propTypes = {
  cardStyle: PropTypes.string,
  className: PropTypes.string,
};

export default Card;
