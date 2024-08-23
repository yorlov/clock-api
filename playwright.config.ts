import {defineConfig} from '@playwright/test';

export default defineConfig({
    reporter: 'list',
    workers: 2,
    use: {
        browserName: 'chromium',
        trace: 'on',
        headless: true,
    }
})