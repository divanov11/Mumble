import React from 'react';

const Card = ({ cardStyle = '', className, children, ...others }) => {
  const cardClass = `${className && className + ' '}card ${
    cardStyle === 'dark' && 'card--dark'
  }`;

  return (
    <div className={cardClass} {...others}>
      <div className="card__body">{children}</div>
    </div>
  );
};

export default Card;
