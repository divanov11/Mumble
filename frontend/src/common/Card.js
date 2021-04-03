import React from 'react';
import classNames from 'classnames';

const Card = ({ cardStyle = '', className, children, ...others }) => {
  console.log(cardStyle);
  console.log(cardStyle === 'dark');
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

export default Card;
