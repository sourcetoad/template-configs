module.exports = {
  /* eslint sort-keys: ["error", "asc"] */
  rules: {
    'array-bracket-spacing': ['error', 'always', {
      'arraysInArrays': false,
      'objectsInArrays': false,
    }],
    'array-element-newline': ['error', 'consistent'],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', {
      'after': true,
      'before': true
    }],
    'brace-style': ['error', '1tbs', {
      'allowSingleLine': false
    }],
    'comma-dangle': 'off',
    'eol-last': ['error', 'always'],
    'eqeqeq': 'error',
    'indent': ['error', 2, {
      'SwitchCase': 1,
    }],
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', 120, {
      'ignorePattern': '^import'
    }],
    'no-console': ['warn', {
      'allow': ['error']
    }],
    'object-curly-spacing': ['error', 'always', {
      'arraysInObjects': false,
      'objectsInObjects': false,
    }],
    'object-property-newline': ['error', {
      'allowAllPropertiesOnSameLine': true
    }],
    'quotes': ['error', 'single', {
      'avoidEscape': true
    }],
    'semi': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
  },
  /* eslint sort-keys: "off" */
};
