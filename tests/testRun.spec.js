const { test, expect } = require('@playwright/test')

test('Home page test', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/')

    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://www.demoblaze.com/')
})