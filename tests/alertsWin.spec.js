const { test, expect } = require('@playwright/test')

test.skip('Alerts window with OK button', async ({ page }) => {

    await page.goto('https://practice-automation.com/popups/')

    const alertBtn = await page.locator('#alert')
    const promptBtn = await page.locator('#prompt')

    //enabling a dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toEqual('Hi there, pal!')
        await dialog.accept()
    })

    await alertBtn.click()
})

test('Consirmation window with Cancel and OK buttons', async ({ page }) => {

    await page.goto('https://practice-automation.com/popups/')

    const confirmBtn = await page.locator('#confirm')
    
    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toEqual('OK or Cancel, which will it be?')
        //await dialog.accept() // close with OK button
        await dialog.dismiss() // close with Cancel button
    })

    await confirmBtn.click()

    await expect(await page.locator('#confirmResult')).toHaveText('Cancel it is!')
})