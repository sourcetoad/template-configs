module.exports = {
  'extends': [
    '@sourcetoad/eslint-base-template-configs-es6',
    'plugin:vue/vue3-essential',
  ],
  'plugins': [
    'vue',
    'unused-imports',
  ],
  'rules': {
    'vue/multi-word-component-names': ['off'],
    'vue/html-indent': [
      'error',
      4,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    'vue/script-indent': [
      'error',
      4,
      {
        baseIndent: 0,
        switchCase: 1,
        ignores: [],
      },
    ],
  }
};
