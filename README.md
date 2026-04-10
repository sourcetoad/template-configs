# Template Configs
_A repo to configure our eslint, prettier, oxlint, and oxfmt rules._

### Current configs
* [ES6](./packages/es6/eslint.config.js)
* [Prettier](./packages/prettier/prettier.config.js)
* [Vue](./packages/vue/eslint.config.js)
* [Oxlint](./packages/oxlint/oxlint.config.ts)
* [Oxfmt](./packages/oxfmt/oxfmt.config.ts)

## Notes

 * In order for this package to work properly. We peer to all dependencies.
 * This means the consuming package must include the peered dependencies.
 * This prevents a mismatch of versions if the rules limited what version of eslint/prettier could be used.
