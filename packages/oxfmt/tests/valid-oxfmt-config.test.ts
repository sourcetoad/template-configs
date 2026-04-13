import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
import {describe, expect, test} from 'vitest';

describe('Oxfmt Configuration Tests', () => {
    test('should load and export a valid config', async () => {
        const configPath = resolve(process.cwd(), 'packages/oxfmt/oxfmt.config.ts');
        const mod = await import(pathToFileURL(configPath).href);
        const config = mod.default;

        expect(config).toBeDefined();
        expect(config).toBeTypeOf('object');
    });
});

