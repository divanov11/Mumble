import React from 'react';

import { Button, ButtonProps } from '../components/Button';

import { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Click Me!</Button>
);

export const Main = Template.bind({});
Main.args = { type: 'main' };

export const Sub = Template.bind({});
Sub.args = { type: 'sub' };

export const Default = Template.bind({});

export const MainOutline = Template.bind({});
MainOutline.args = { type: 'main', outline: true };

export const SubOutline = Template.bind({});
SubOutline.args = { type: 'sub', outline: true };

export const SmallButton = Template.bind({});
SmallButton.args = { size: 'sm' };

export const LargeButton = Template.bind({});
LargeButton.args = { size: 'lg' };

export const Sink: React.VFC<{}> = () => {
  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button type="main">Main Button</Button>
        <Button type="sub">Sub Button</Button>
        <Button type="default">Default Button</Button>
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <Button type="main" outline>
          Main Outlined
        </Button>
        <Button type="sub" outline>
          Sub Outlined
        </Button>
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <Button size="sm">Small Button</Button>
        <Button size="lg">Large Button</Button>
      </div>
    </div>
  );
};
