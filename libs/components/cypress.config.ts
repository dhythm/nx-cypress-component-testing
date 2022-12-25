import { nxComponentTestingPreset } from '@nrwl/react/plugins/component-testing';
import { defineConfig } from 'cypress';
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';

export default defineConfig({
  // component: nxComponentTestingPreset(__filename),
  component: {
    ...nxComponentTestingPreset(__filename),
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);
    },
  },
});
