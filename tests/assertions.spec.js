const { test, expect } = require('@playwright/test')
const exp = require('constants')

test ('Assertions', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register')

    //expect(page).toHaveURL()
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //expect(page).toHaveTitle()
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //expect(locator).toBeVisisble()
    const logoElement = await page.locator('.header-logo')

    await expect(logoElement).toBeVisible()

    //expect(locator).toBeEnabled()
    const searchStoreField = await page.getByPlaceholder('Search store')
    const serachFieldById = await page.locator("input[id='small-searchterms']")

    await expect(searchStoreField).toBeEnabled()
    await expect(serachFieldById).toBeEnabled()

    //expect().toBeChecked()
    const radioBtnMale = await page.locator('#gender-male')

    await expect(radioBtnMale).not.toBeChecked()

    await radioBtnMale.check()

    await expect(radioBtnMale).toBeChecked()

    //expect(locator).toHaveAttribute()
    const registerBtn = await page.locator('#register-button')

    await expect(registerBtn).toHaveAttribute('name', 'register-button')

    //expect(locator).toHaveText()
    const registerTitle = await page.locator('.page-title h1')

    await expect(registerTitle).toHaveText('Register')

    //expect(locator).toContainText()
    const personalDetailsTitle = await page.locator("//div[@class='title']//*[text()='Your Personal Details']")

    await expect(personalDetailsTitle).toContainText('Personal')
    
    //expect(locator).toHaveValue()
    const firstNameField = await page.locator('#FirstName')

    await expect(firstNameField).toBeEnabled()

    await firstNameField.fill('Test')

    await expect(firstNameField).toHaveValue('Test')

    //expect(locator).toHaveCount()
    const headMenu = await page.locator('.header-menu ul')

    await expect(headMenu).toHaveCount(8)
      
})