const { test, expect } = require('@playwright/test')

test('iFrames testing', async ({ page }) => {

    await page.goto('https://play1.automationcamp.ir/frames.html')

    // const allIFrames = await page.frames()
    // console.log('Number os iFrames: ', allIFrames.length)

    // 1st approach: using iFrame name or url
    // const frame1 = await page.frame({url: 'https://play1.automationcamp.ir/frame1.html'})
    // const clickMe1Btn = await frame1.locator('button[id="click_me_1"]')

    // await expect(clickMe1Btn).toHaveText('Click Me 1')
    // await frame1.click('button[id="click_me_1"]')
    // await expect(clickMe1Btn).toHaveText('Clicked')

    //2nd approach: using iFrame locator
    const frame1 = await page.frameLocator('#frame1')
    // const clickBtn_1 = await frame1.locator('button[id="click_me_1"]')
    // await expect(clickBtn_1).toHaveText('Click Me 1')

    // await clickBtn_1.click()
    // await expect(clickBtn_1).toHaveText('Clicked')


    const frame2 = await frame1.frameLocator('#frame2')
    const clickBtn_2 = await frame2.locator('button[id="click_me_2"]')
    await expect(clickBtn_2).toHaveText('Click Me 2')

    await clickBtn_2.click()
    await expect(clickBtn_2).toHaveText('Clicked')
})