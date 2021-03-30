import '../ui-kit/styles/app.css';

import React from 'react';

export type ButtonProps = {
  type?: 'main' | 'sub' | 'default';
  outline?: boolean;
  size?: 'sm' | 'lg' | 'default';
};

export const Button: React.FC<ButtonProps> = ({ type="default", outline, size, children }) => {
  let btnClassNames = ['btn'];
  switch (type) {
    case 'main':
      btnClassNames.push(outline ? 'btn--main--outline' : 'btn--main');
      break;
    case 'sub':
      btnClassNames.push(outline ? 'btn--sub--outline' : 'btn--sub');
      break;
    default:
      break;
  }

  switch (size) {
    case 'sm':
      btnClassNames.push('btn--sm');
      break;
    case 'lg':
      btnClassNames.push('btn--lg');
  }

  return <button className={btnClassNames.join(' ')}>{children}</button>;
};
