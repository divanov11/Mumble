import React from 'react';

import { Heading } from '../components/Heading';

import { Meta } from '@storybook/react';

export default {
  title: 'Components/Heading',
  component: Heading,
} as Meta;

export const Heading1: React.VFC<{}> = () => <Heading size="h1">Heading 1</Heading>;
export const Heading2: React.VFC<{}> = () => <Heading size="h2">Heading 2</Heading>;
export const Heading3: React.VFC<{}> = () => <Heading size="h3">Heading 3</Heading>;
export const Heading4: React.VFC<{}> = () => <Heading size="h4">Heading 4</Heading>;
export const Heading5: React.VFC<{}> = () => <Heading size="h5">Heading 5</Heading>;