import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { Hello } from '.';

type T = typeof Hello;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
  component: Hello,
} as Meta;

export const Default: Story = {};
