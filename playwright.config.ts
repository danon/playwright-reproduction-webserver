import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
  webServer: [
    {
      url: 'http://localhost:4100/',
      command: 'pnpm vite preview --port 4100',
      stdout: 'pipe',
      stderr: 'pipe',
    },
    {
      url: 'http://localhost:4300/',
      command: 'go run .',
      stdout: 'pipe',
      stderr: 'pipe',
    },
  ],
});
