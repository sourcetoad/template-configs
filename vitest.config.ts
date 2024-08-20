import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    mockReset: true,
    restoreMocks: true,
    setupFiles: ['vitest.setup.ts'],
    testTimeout: 120e3
  },
});
