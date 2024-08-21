import {describe, expect, test} from 'vitest';
import {lintCode} from '../../../test-utils/eslint';

describe('ESLint Configuration Tests', () => {
    test('should flag no-console', async () => {
        const code = 'console.log("Hello, world!");';
        const results = await lintCode(code, 'packages/es6/eslint.config.js');
        const errors = results[0].messages.map(msg => msg.ruleId);
        expect(errors).toContain('no-console');
    });

    test('should not flag no-console for console.error', async () => {
        const code = 'console.error("Error here!");';
        const results = await lintCode(code, 'packages/es6/eslint.config.js');
        const errors = results[0].messages.map(msg => msg.ruleId);
        expect(errors).not.toContain('no-console');
    });
});
