import '../ui-kit/styles/app.css';

import React from 'react';

export type HeadingProps = {
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
};

export const Heading: React.FC<HeadingProps> = ({ size, children }) => {
  const sizeMap = {
    h1: (children: React.ReactNode) => <h1>{children}</h1>,
    h2: (children: React.ReactNode) => <h2>{children}</h2>,
    h3: (children: React.ReactNode) => <h3>{children}</h3>,
    h4: (children: React.ReactNode) => <h4>{children}</h4>,
    h5: (children: React.ReactNode) => <h5>{children}</h5>,
  };

  return sizeMap[size](children);
};
