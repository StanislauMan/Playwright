const { test, expect } = require('@playwright/test')

test('Dropdown testing', async({ page }) => {

    await page.goto('https://practice-automation.com/form-fields/')

    await page.locator('#siblings').selectOption('No') 

    // const options = await page.locator('#siblings option')
    // await expect(options).toHaveCount(4)
    
    // OR 

    // const options = await page.$$('#siblings option')
    // await expect(options.length).toBe(4)


    const content = await page.locator('#siblings').textContent()
    await expect(content.includes('Yes')).toBeTruthy()

    await page.pause()
})

// test('Another fropdown', async({ page }) => {

//     await page.goto('https://testautomationpractice.blogspot.com/')

//     await page.locator('#country').selectOption({label: 'Canada'})

//     await page.pause()
// })