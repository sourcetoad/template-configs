import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {describe, expect, test} from 'vitest';

describe('Oxlint Configuration Tests', () => {
    const configPath = resolve(process.cwd(), 'packages/oxlint/.oxlintrc.json');
    const config = JSON.parse(readFileSync(configPath, 'utf-8'));

    test('should be valid JSON with $schema', () => {
        expect(config).toBeDefined();
        expect(config.$schema).toBeDefined();
    });

    test('should enable the typescript plugin', () => {
        expect(config.plugins).toContain('typescript');
    });

    test('should enable the import plugin', () => {
        expect(config.plugins).toContain('import');
    });

    test('should set correctness category to error', () => {
        expect(config.categories.correctness).toBe('error');
    });

    test('should configure no-console to error with allowed methods', () => {
        expect(config.rules['no-console']).toBeDefined();
        expect(config.rules['no-console'][0]).toBe('error');
        expect(config.rules['no-console'][1].allow).toContain('warn');
        expect(config.rules['no-console'][1].allow).toContain('error');
    });

    test('should configure eqeqeq as error', () => {
        expect(config.rules.eqeqeq).toBe('error');
    });

    test('should configure prefer-const as warn', () => {
        expect(config.rules['prefer-const']).toBe('warn');
    });
});
