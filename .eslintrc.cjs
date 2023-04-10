module.exports = {
  root: true,
  env: {
    commonjs: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'array-bracket-spacing': ['error', 'never', {
      'arraysInArrays': false,
      'objectsInArrays': false
    }],
    'indent': ['error', 2, {
      'SwitchCase': 1
    }],
    'object-curly-spacing': ['error', 'never', {
      'arraysInObjects': false,
      'objectsInObjects': false
    }],
    'object-property-newline': ['error', {
      'allowAllPropertiesOnSameLine': true
    }],
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single', {
      'avoidEscape': true
    }],
  }
};
