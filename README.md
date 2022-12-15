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

```sh
npx nx g @nrwl/react:app something
npx nx g @nrwl/react:lib components
```

```sh
nx g @nrwl/react:cypress-component-configuration --project=components
nx component-test components --watch
```
