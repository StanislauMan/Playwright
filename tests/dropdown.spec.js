const { test, expect } = require('@playwright/test')

test('Dropdown testing', async({ page }) => {

    await page.goto('https://practice-automation.com/form-fields/')

    await page.locator('#siblings').selectOption('No') 
    // await page.locator('#siblings').selectOption({value: 'no'})

    // const options = await page.locator('#siblings option')
    // await expect(options).toHaveCount(4)
    
    // OR 

    // const options = await page.$$('#siblings option')
    // await expect(options.length).toBe(4)


    // const content = await page.locator('#siblings').textContent()
    // await expect(content.includes('Yes')).toBeTruthy()

    const options = await page.$$('#siblings option')
    
    for (let option of options){
        let value = await option.textContent()
        if(value.includes('Maybe')){
            await page.selectOption('#siblings', value)
            break
        }
    }

})


test.only('Multi-select dropdown', async({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#colors').selectOption(['Blue', 'Green', 'White'])

})