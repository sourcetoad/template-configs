module.exports = {
  extends: [
    'eslint:recommended',
    '@sourcetoad/eslint-base-template-configs-common',
  ],
  env: {
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  plugins: [
    'unused-imports',
  ],
  /* eslint sort-keys: ["error", "asc"] */
  rules: {
    'no-unused-vars': ['error', {'args': 'none'}],
    'no-var': 'error',
    'require-jsdoc': 'off',
    'unused-imports/no-unused-imports': 'error',
    'valid-jsdoc': 'error',
  },
  /* eslint sort-keys: "off" */
};
