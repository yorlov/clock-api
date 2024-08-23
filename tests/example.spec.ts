import {expect, test} from '@playwright/test';

test.describe('clock api', () => {

    test('datepicker', async ({page}) => {
        const errorLogs = []
        page.on("pageerror", err => errorLogs.push(err.message))

        await page.goto(`file://${__dirname}/index.html`)

        await page.click('#from')
        await page.keyboard.type('May 18, 2022')
        await page.keyboard.press('Escape')

        expect(errorLogs.length).toBe(0)
    })

    test('datepicker with fixed time', async ({page}) => {
        const errorLogs = []
        page.on("pageerror", err => errorLogs.push(err.message))

        await page.goto(`file://${__dirname}/index.html`)

        await page.clock.setFixedTime(new Date(2023, 4, 26))

        await page.click('#from')
        await page.keyboard.type('May 18, 2022')
        await page.keyboard.press('Escape')

        expect(errorLogs.length).toBe(0)
    })
})