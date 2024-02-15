const { test, expect } = require('@playwright/test')

test ('Data picker testing', async ({ page }) => {

    await page.goto('https://practice-automation.com/calendars/')

    const dateField = await page.locator('input[data-format="yy-mm-dd"]')
    const dateResult = await page.locator('.field-value')
    const submitBtn = await page.getByRole('button', { name: 'Submit' })

    await dateField.fill('2024-03-10', {timeout: 1000})
    await page.pause()

    await page.keyboard.press('Enter')
    await page.pause()

    //await submitBtn.click()

    //await page.waitForSelector('.field-value')

    await expect(dateResult).toHaveText('2024-03-10')

    await page.pause()



})