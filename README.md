# Base Template Configs

Where projects start with configs to keep or replace with team specified ones. Other teams are tracked at:

 * [Stinger](https://github.com/sourcetoad/pod-stinger-configs)
 * [Iceman](https://github.com/sourcetoad/pod-iceman-linter-config)

### Current configs
* [Common](packages/es6/README.md)
* [ES6](packages/vue/README.md)


## Notes

 * In order for this package to work properly. We peer to all dependencies.
 * This means the consuming package must include the peered dependencies.
 * This prevents a mismatch of versions if the rules limited what version of eslint could be used.
