import { rootMain } from '../../../.storybook/main';

import type { StorybookConfig, Options } from '@storybook/core-common';

const config: StorybookConfig = {
  ...rootMain,
  core: { ...rootMain.core, builder: '@storybook/builder-vite' },
  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...(rootMain.addons || [])],
};

module.exports = config;
