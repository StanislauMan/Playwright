const { test, expect } = require('@playwright/test')

test.skip('Alert window with OK button', async ({ page }) => {

    await page.goto('https://practice-automation.com/popups/')

    const alertBtn = await page.locator('#alert')

    //enabling a dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toEqual('Hi there, pal!')
        await dialog.accept()
    })

    await alertBtn.click()
})

test.skip('Consirmation window with Cancel and OK buttons', async ({ page }) => {

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

test('Prompt window with input field', async ({ page }) => {

    await page.goto('https://practice-automation.com/popups/')

    const promptBtn = await page.locator('#prompt')
    let testName = 'userName-01'

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toEqual('Hi there, what\'s your name?')
        await dialog.accept(testName)
    })

    await promptBtn.click()

    await expect(await page.locator('#promptResult')).toHaveText(`Nice to meet you, ${testName}!`)
})