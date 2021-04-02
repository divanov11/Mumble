import '../ui-kit/styles/app.css';

import React from 'react';

export type TextProps = {
  type: 'p' | 'span' | 'strong';
};

export const Text: React.FC<TextProps> = ({ type, children }) => {
  const textMap = {
    p: (children: React.ReactNode) => <p>{children}</p>,
    span: (children: React.ReactNode) => <span>{children}</span>,
    strong: (children: React.ReactNode) => <strong>{children}</strong>,
  };
  return textMap[type](children);
};
