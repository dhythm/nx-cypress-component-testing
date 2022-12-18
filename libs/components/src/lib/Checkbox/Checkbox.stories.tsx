import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ComponentPropsWithoutRef } from 'react';
import { Checkbox } from '.';

type T = typeof Checkbox;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

const args: ComponentPropsWithoutRef<T> = {
  isChecked: true,
  label: 'confirm?',
};

export default {
  component: Checkbox,
  args,
} as Meta;

export const Default: Story = {};
