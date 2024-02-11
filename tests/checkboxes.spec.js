const { test, expect } = require('@playwright/test')

test('Checkboxes testing', async ({ page }) => {

    await page.goto('https://practice-automation.com/form-fields/')

    const checkboxesLocator = ['input[value="Water"]', 'input[value="Milk"]', 'input[value="Coffee"]', 'input[value="Wine"]', 'input[value="Ctrl-Alt-Delight"]']

    for (let locator of checkboxesLocator){
        await page.locator(locator).check()
        
        await expect(await page.locator(locator)).toBeChecked()
    }

    await page.waitForTimeout(3000)

    for (let locators of checkboxesLocator){
        if(await page.locator(locators).isChecked()){
            await page.locator(locators).uncheck()

            await expect(await page.locator(locators)).not.toBeChecked()
        }
    }

    await page.waitForTimeout(3000)
})