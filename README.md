# Nuxt repro for Playwright 

## Locator.count() with _vue selector

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# run the test
$ yarn test
```
As you can see `Locator.count()` when used on `_vue` selector is not working as intended opposed to the `expect.toHaveCount`  method.
