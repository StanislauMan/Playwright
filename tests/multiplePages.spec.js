const { test, expect, chromium } = require('@playwright/test')

test('Handling multiple pages/windows', async () => {

    const browser = await chromium.launch()
    const context = await browser.newContext()
    
    const page = await context.newPage()

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page).toHaveTitle('OrangeHRM')

    const pagePromise = context.waitForEvent('page')
    await page.locator('//a[text()="OrangeHRM, Inc"]').click()
    const newPage = await pagePromise
    await newPage.waitForLoadState()
    await expect(newPage).toHaveTitle('OrangeHRM HR Software | OrangeHRM')
    
})