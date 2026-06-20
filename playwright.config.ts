import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
  webServer: [
    {port: 4100, command: 'pnpm vite preview --port 4100'},
    {port: 4300, command: 'go run .'},
  ],
});
