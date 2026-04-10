import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
import {beforeAll, describe, expect, test} from 'vitest';

describe('Oxfmt Configuration Tests', () => {
    let config: Record<string, unknown>;

    beforeAll(async () => {
        const configPath = resolve(process.cwd(), 'packages/oxfmt/oxfmt.config.ts');
        const mod = await import(pathToFileURL(configPath).href);
        config = mod.default;
    });

    test('should export a valid config via defineConfig', () => {
        expect(config).toBeDefined();
    });

    test('should use single quotes', () => {
        expect(config.singleQuote).toBe(true);
    });

    test('should use semicolons', () => {
        expect(config.semi).toBe(true);
    });

    test('should set tabWidth to 4', () => {
        expect(config.tabWidth).toBe(4);
    });

    test('should use trailing commas for all', () => {
        expect(config.trailingComma).toBe('all');
    });

    test('should disable bracket spacing', () => {
        expect(config.bracketSpacing).toBe(false);
    });

    test('should set printWidth to 120', () => {
        expect(config.printWidth).toBe(120);
    });

    test('should set bracketSameLine to false', () => {
        expect(config.bracketSameLine).toBe(false);
    });
});
