const { test, expect } = require('@playwright/test')

test('File upload testing', async ({ page }) => {

    await page.goto('https://practice-automation.com/file-upload/')

    await page.locator('#file-upload').setInputFiles('tests-data\\0_1MB.pdf')

    const uploadBtn = await page.locator('#upload-btn')
    const successMessage = await page.locator('.wpcf7-response-output')

    uploadBtn.click()
    await page.waitForSelector('.wpcf7-response-output')
    
    await expect(successMessage).toHaveText('Thank you for your message. It has been sent.')
})