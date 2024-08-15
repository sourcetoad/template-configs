import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import {configs,parser,plugin} from 'typescript-eslint';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
    ...configs.recommended,
    {
        name: 'base-template-config-es6',
        plugins: {
            '@typescript-eslint': plugin,
            'simple-import-sort': eslintPluginSimpleImportSort,
        },
        languageOptions: {
            parser: parser,
            globals: {
                ...globals.browser,
                ...globals.es2021,
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
