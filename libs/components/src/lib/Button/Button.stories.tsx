import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ComponentPropsWithoutRef } from 'react';
import { Button } from './';

type T = typeof Button;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

const args: ComponentPropsWithoutRef<T> = {
  text: 'click me',
};

export default {
  component: Button,
  args,
} as Meta;

export const Default: Story = {};
