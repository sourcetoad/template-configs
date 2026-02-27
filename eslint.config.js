import globals from 'globals';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      sourceType: 'module',
    },
    rules: {
      'array-bracket-spacing': ['error', 'never', {
        'arraysInArrays': false,
        'objectsInArrays': false,
      }],
      'indent': ['error', 2, {
        'SwitchCase': 1,
      }],
      'object-curly-spacing': ['error', 'never', {
        'arraysInObjects': false,
        'objectsInObjects': false,
      }],
      'object-property-newline': ['error', {
        'allowAllPropertiesOnSameLine': true,
      }],
      'quote-props': ['error', 'consistent'],
      'quotes': ['error', 'single', {
        'avoidEscape': true,
      }],
    },
  },
];
