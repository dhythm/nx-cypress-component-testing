---
to: <%= abs_path %>/<%= component_name %>.stories.tsx
---
import { type ComponentMeta, type ComponentStoryObj } from "@storybook/react"
import { <%= component_name %> } from "./<%= component_name %>"

type T = typeof <%= name %>
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

<% if (have_props) { -%>
import { ComponentPropsWithoutRef } from 'react';
const args: ComponentPropsWithoutRef<T> = {}
<% } -%>

export default {
  component: <%= name %>,
  <% if (have_props) { -%>
  args,
  <% } -%>
} as Meta


export const Default: Story = {}
