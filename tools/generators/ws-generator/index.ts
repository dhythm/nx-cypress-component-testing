import {
  formatFiles,
  getProjects,
  installPackagesTask,
  Tree,
  updateProjectConfiguration,
  writeJson,
} from '@nrwl/devkit';
import { Linter } from '@nrwl/linter';
// import { libraryGenerator } from '@nrwl/workspace/generators';
import { libraryGenerator } from '@nrwl/react';
import * as path from 'path';

export default async function (tree: Tree, schema: any) {
  const name: string = schema.name;
  const projectName: string = schema.name.replace('/', '-');
  const root = `libs/${name}`;

  await libraryGenerator(tree, {
    name: schema.name,
    linter: Linter.EsLint,
    skipFormat: true,
    skipTsConfig: false,
    style: '@emotion/styled',
    unitTestRunner: 'jest',
    compiler: 'swc',
  });

  const projects = getProjects(tree);
  const project = projects.get(projectName);
  if (!project) throw new Error('project not found');

  updateProjectConfiguration(tree, projectName, {
    ...project,
    targets: {
      ...project.targets,
      'ts-check': {
        executor: '@nrwl/workspace:run-commands',
        options: {
          command: `npx tsc -p ${root}/tsconfig.lib.json --noEmit --incremental && npx tsc -p ${root}/tsconfig.spec.json --noEmit --incremental`,
        },
      },
      stylelint: {
        executor: '@nrwl/workspace:run-commands',
        outputs: [],
        options: {
          command: "stylelint '**/*.{css,js,jsx,ts,tsx}'",
          cwd: root,
        },
      },
    },
  });
  writeJson(tree, `${root}/.stylelintrc.json`, {
    extends: [path.relative(root, '.stylelintrc.json')],
    ignoreFiles: ['!**/*'],
    overrides: [{ files: ['**/*.css'], rules: {} }],
  });
  writeJson(tree, `${root}/package.json`, {
    name: `${projectName}`,
    sideEffects: [],
  });

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
