import {defineConfig} from 'oxlint';

export default defineConfig({
    plugins: ['typescript', 'import'],
    categories: {
        correctness: 'error',
    },
    env: {
        browser: true,
        es2021: true,
    },
    rules: {
        'eqeqeq': 'error',
        'max-len': ['error', {max: 120, ignorePattern: '^import'}],
        'no-console': ['error', {allow: ['warn', 'error']}],
        'prefer-const': 'warn',
    },
    ignorePatterns: ['node_modules/', 'dist/'],
});
