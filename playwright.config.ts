import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
  webServer: [
    {url: 'http://localhost:4100/', command: 'pnpm vite preview --port 4100'},
    {url: 'http://localhost:4300/', command: 'go run .'},
  ],
});
