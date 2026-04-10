import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {describe, expect, test} from 'vitest';

describe('Oxfmt Configuration Tests', () => {
    const configPath = resolve(process.cwd(), 'packages/oxfmt/.oxfmtrc.json');
    const config = JSON.parse(readFileSync(configPath, 'utf-8'));

    test('should be valid JSON with $schema', () => {
        expect(config).toBeDefined();
        expect(config.$schema).toBeDefined();
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
