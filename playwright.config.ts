import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
  webServer: [
    {url: 'http://127.0.0.1:4100/', command: 'pnpm vite preview --port 4100'},
    {url: 'http://127.0.0.1:4300/', command: 'go run .'},
  ],
});
