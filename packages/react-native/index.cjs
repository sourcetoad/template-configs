module.exports = {
  extends: [
    '@react-native-community',
    '@sourcetoad/eslint-base-template-configs-common',
  ],
  plugins: [
    'unused-imports',
  ],
  /* eslint sort-keys: ["error", "asc"] */
  rules: {
    'class-methods-use-this': 'off',
    'no-bitwise': 'off',
    'no-console': 'off',
    'no-unreachable-loop': 'warn',
    'no-unused-vars': ['error', {'args': 'none'}],
    'no-var': 'error',
    'prettier/prettier': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-key': 'warn',
    'react/jsx-boolean-value': 'off',
    'react/jsx-uses-vars': 'error',
    'react/jsx-tag-spacing': ['error', {
      'beforeSelfClosing': 'always'
    }],
    'react/jsx-fragments': ['off', 'element'],
    'react/prop-types': 'off',
    'react/sort-comp': 'off',
    'react-native/no-inline-styles': 'off',
    'require-jsdoc': 'off',
    'unused-imports/no-unused-imports': 'error',
    'valid-jsdoc': ['error', {
      'requireParamDescription': false,
      'requireReturnDescription': false
    }],
  },
  /* eslint sort-keys: "off" */
};
