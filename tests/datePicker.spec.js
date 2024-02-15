const { test, expect } = require('@playwright/test')

test ('Data picker testing', async ({ page }) => {

    await page.goto('https://practice-automation.com/calendars/')

    const dateField = await page.locator('input[data-format="yy-mm-dd"]')
    const dateResult = await page.locator('.field-value')
    const submitBtn = await page.getByRole('button', { name: 'Submit' })

    let year = '2024'
    let month = 'September'
    let date = '25'

    await dateField.click() 

    // await dateField.fill('2024-03-10')

    // await submitBtn.press('Enter')

    // await page.waitForSelector('.field-value')

    // await expect(dateResult).toHaveText('2024-03-10')

    while(true) {

        const currentMonth = await page.locator('.ui-datepicker-month').textContent()
        const currentYear = await page.locator('.ui-datepicker-year').textContent()

        if(currentYear == year && currentMonth == month){
            break
        }

        await page.locator('a[title="Next"]').click()
    }

    const dates = await page.$$('a[class="ui-state-default"]')

    for(const day of dates){

        if(await day.textContent() == date){
            await day.click()
            break
        }
    }

    await submitBtn.click()

    await expect(dateResult).toHaveText('2024-09-25')

})