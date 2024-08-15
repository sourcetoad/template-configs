import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import ts from 'typescript-eslint';

export default [
    ...ts.configs.recommended,
    {
        name: 'base-template-config-es6',
        plugins: {
            'simple-import-sort': eslintPluginSimpleImportSort,
        },
        languageOptions: {
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
        },
        rules: {
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
                },
            ],
        },
    },
];
