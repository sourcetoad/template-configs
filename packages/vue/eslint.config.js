import unusedImports from 'eslint-plugin-unused-imports';
import pluginVue from 'eslint-plugin-vue';
import baseTemplateConfigEs6 from '../es6/eslint.config.js';

export default [
    ...pluginVue.configs['flat/essential'],
    ...baseTemplateConfigEs6,
    {
        name: 'base-template-config-vue',
        plugins: {
            'unused-imports': unusedImports,
        },
        rules: {
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
        },
    },
];
