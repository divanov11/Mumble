import React from 'react';

import { Text, TextProps } from '../components/Text';

import { Meta } from '@storybook/react';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

export const Paragraph: React.FC<TextProps> = () => <Text type="p">Paragraph Text</Text>
export const Span: React.FC<TextProps> = () => <Text type="span">Span Text</Text>
export const Strong: React.FC<TextProps> = () => <Text type="strong">Strong Text</Text>