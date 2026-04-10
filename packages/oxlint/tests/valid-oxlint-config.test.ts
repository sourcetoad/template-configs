import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
import {describe, expect, test} from 'vitest';

describe('Oxlint Configuration Tests', () => {
    let config: Record<string, unknown>;

    test('should export a valid config via defineConfig', async () => {
        const configPath = resolve(process.cwd(), 'packages/oxlint/oxlint.config.ts');
        const mod = await import(pathToFileURL(configPath).href);
        config = mod.default;
        expect(config).toBeDefined();
    });

    test('should enable the typescript plugin', async () => {
        const configPath = resolve(process.cwd(), 'packages/oxlint/oxlint.config.ts');
        const mod = await import(pathToFileURL(configPath).href);
        config = mod.default;
        expect(config.plugins).toContain('typescript');
    });

    test('should enable the import plugin', async () => {
        const configPath = resolve(process.cwd(), 'packages/oxlint/oxlint.config.ts');
        const mod = await import(pathToFileURL(configPath).href);
        config = mod.default;
        expect(config.plugins).toContain('import');
    });

    test('should set correctness category to error', async () => {
        const configPath = resolve(process.cwd(), 'packages/oxlint/oxlint.config.ts');
        const mod = await import(pathToFileURL(configPath).href);
        config = mod.default;
        const categories = config.categories as Record<string, string>;
        expect(categories.correctness).toBe('error');
    });

    test('should configure no-console to error with allowed methods', async () => {
        const configPath = resolve(process.cwd(), 'packages/oxlint/oxlint.config.ts');
        const mod = await import(pathToFileURL(configPath).href);
        config = mod.default;
        const rules = config.rules as Record<string, unknown>;
        const noConsole = rules['no-console'] as [string, {allow: string[]}];
        expect(noConsole).toBeDefined();
        expect(noConsole[0]).toBe('error');
        expect(noConsole[1].allow).toContain('warn');
        expect(noConsole[1].allow).toContain('error');
    });

    test('should configure eqeqeq as error', async () => {
        const configPath = resolve(process.cwd(), 'packages/oxlint/oxlint.config.ts');
        const mod = await import(pathToFileURL(configPath).href);
        config = mod.default;
        const rules = config.rules as Record<string, unknown>;
        expect(rules.eqeqeq).toBe('error');
    });

    test('should configure prefer-const as warn', async () => {
        const configPath = resolve(process.cwd(), 'packages/oxlint/oxlint.config.ts');
        const mod = await import(pathToFileURL(configPath).href);
        config = mod.default;
        const rules = config.rules as Record<string, unknown>;
        expect(rules['prefer-const']).toBe('warn');
    });
});
