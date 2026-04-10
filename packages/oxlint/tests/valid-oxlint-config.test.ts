import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
import {beforeAll, describe, expect, test} from 'vitest';

describe('Oxlint Configuration Tests', () => {
    let config: Record<string, unknown>;

    beforeAll(async () => {
        const configPath = resolve(process.cwd(), 'packages/oxlint/oxlint.config.ts');
        const mod = await import(pathToFileURL(configPath).href);
        config = mod.default;
    });

    test('should export a valid config via defineConfig', () => {
        expect(config).toBeDefined();
    });

    test('should enable the typescript plugin', () => {
        expect(config.plugins).toContain('typescript');
    });

    test('should enable the import plugin', () => {
        expect(config.plugins).toContain('import');
    });

    test('should set correctness category to error', () => {
        const categories = config.categories as Record<string, string>;
        expect(categories.correctness).toBe('error');
    });

    test('should configure no-console to error with allowed methods', () => {
        const rules = config.rules as Record<string, unknown>;
        const noConsole = rules['no-console'] as [string, {allow: string[]}];
        expect(noConsole).toBeDefined();
        expect(noConsole[0]).toBe('error');
        expect(noConsole[1].allow).toContain('warn');
        expect(noConsole[1].allow).toContain('error');
    });

    test('should configure eqeqeq as error', () => {
        const rules = config.rules as Record<string, unknown>;
        expect(rules.eqeqeq).toBe('error');
    });

    test('should configure prefer-const as warn', () => {
        const rules = config.rules as Record<string, unknown>;
        expect(rules['prefer-const']).toBe('warn');
    });
});
