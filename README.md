# nx-cypress-component-testing

## Set up environment

https://nx.dev/react-tutorial/1-code-generation

```sh
npx create-nx-workspace@latest

✔ Choose what to create                 · integrated
✔ What to create in the new workspace   · react-monorepo
✔ Repository name                       · nx-cypress-component-testing
✔ Application name                      · admin
✔ Default stylesheet format             · @emotion/styled
✔ Enable distributed caching to make your CI faster · No
```

### Create an app

```sh
npx nx g @nrwl/react:app something
```

### Create an lib with vite

```sh
npx nx g @nrwl/react:lib components
✔ Which bundler would you like to use to build the library? Choose 'none' to skip build setup. · vite

npx nx g @nrwl/react:cypress-component-configuration --project=components
✔ Automatically generate tests for components declared in this project? (y/N) · false

npx nx component-test components
```

### Create an lib with webpack

```sh
npx nx g @nrwl/react:lib something
✔ Which bundler would you like to use to build the library? Choose 'none' to skip build setup. · none

npx nx g @nrwl/webpack:webpack-project something
npx nx g @nrwl/react:cypress-component-configuration --project=something --build-target=something:build
✔ Automatically generate tests for components declared in this project? (y/N) · true
npx nx component-test something
```

```sh
npm i -D @nrwl/storybook
nx g @nrwl/storybook:configuration components --tsConfiguration=true
```

### Set up workspace generator and local generator

```sh
npm install @nrwl/nx-plugin@latest
npx nx g @nrwl/nx-plugin:plugin my-plugin
npx nx generate @nrwl/nx-plugin:generator my-generator --project=my-plugin

npx nx workspace-generator my-plugin
```
