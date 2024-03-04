// TODO https://eslint.org/docs/latest/use/configure/configuration-files-new
export default [{
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'ignorePatterns': ['/.eslintrc.js', '/*.config.js'],
  'overrides': [],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'parser': '@typescript-eslint/parser',
  },
  'plugins': [
    '@typescript-eslint',
    'simple-import-sort'
  ],
  'rules': {
    'array-bracket-spacing': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'eqeqeq': 'error',
    'indent': ['error', 4, {'SwitchCase': 1}],
    'max-len': ['error', 120, {'ignorePattern': '^import'}],
    'no-console': ['error', {'allow': ['warn', 'error']}],
    'object-curly-spacing': ['error', 'never'],
    'prefer-const': 'warn',
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
      },
    ],
    'semi': ['error'],
    'simple-import-sort/imports': [
      'error',
      {
        'groups': [['^\\u0000', '^node:', '^@?\\w', '^', '^\\.']],
      }
    ],
  }
}];
