const { test, expect } = require('@playwright/test')

test('Dropdown testing', async({ page }) => {

    await page.goto('https://practice-automation.com/form-fields/')

    await page.locator('#siblings').selectOption('No') 

    await page.pause()
})

test.only('Another fropdown', async({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#country').selectOption({label: 'Canada'})

    await page.pause()
})