import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
import {describe, expect, test} from 'vitest';

describe('Oxfmt Configuration Tests', () => {
    let config: Record<string, unknown>;

    test('should export a valid config via defineConfig', async () => {
        const configPath = resolve(process.cwd(), 'packages/oxfmt/oxfmt.config.ts');
        const mod = await import(pathToFileURL(configPath).href);
        config = mod.default;
        expect(config).toBeDefined();
    });

    test('should use single quotes', async () => {
        const configPath = resolve(process.cwd(), 'packages/oxfmt/oxfmt.config.ts');
        const mod = await import(pathToFileURL(configPath).href);
        config = mod.default;
        expect(config.singleQuote).toBe(true);
    });

    test('should use semicolons', async () => {
        const configPath = resolve(process.cwd(), 'packages/oxfmt/oxfmt.config.ts');
        const mod = await import(pathToFileURL(configPath).href);
        config = mod.default;
        expect(config.semi).toBe(true);
    });

    test('should set tabWidth to 4', async () => {
        const configPath = resolve(process.cwd(), 'packages/oxfmt/oxfmt.config.ts');
        const mod = await import(pathToFileURL(configPath).href);
        config = mod.default;
        expect(config.tabWidth).toBe(4);
    });

    test('should use trailing commas for all', async () => {
        const configPath = resolve(process.cwd(), 'packages/oxfmt/oxfmt.config.ts');
        const mod = await import(pathToFileURL(configPath).href);
        config = mod.default;
        expect(config.trailingComma).toBe('all');
    });

    test('should disable bracket spacing', async () => {
        const configPath = resolve(process.cwd(), 'packages/oxfmt/oxfmt.config.ts');
        const mod = await import(pathToFileURL(configPath).href);
        config = mod.default;
        expect(config.bracketSpacing).toBe(false);
    });

    test('should set printWidth to 120', async () => {
        const configPath = resolve(process.cwd(), 'packages/oxfmt/oxfmt.config.ts');
        const mod = await import(pathToFileURL(configPath).href);
        config = mod.default;
        expect(config.printWidth).toBe(120);
    });

    test('should set bracketSameLine to false', async () => {
        const configPath = resolve(process.cwd(), 'packages/oxfmt/oxfmt.config.ts');
        const mod = await import(pathToFileURL(configPath).href);
        config = mod.default;
        expect(config.bracketSameLine).toBe(false);
    });
});
