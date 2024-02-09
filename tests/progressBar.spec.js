const { test, expect } = require('@playwright/test')

test('Progress bar test', async ({ page }) => {

    await page.goto('http://uitestingplayground.com/progressbar')

    await page.locator('#startButton').click()

    const progressBar = await page.locator('#progressBar')

    await expect(progressBar).toBeVisible()
    await expect(progressBar).toHaveText('25%')

    const progressTest = page.waitForFunction(() => progressBar.textContent === '75%')

    await progressTest

    await page.locator('#stopButton').click()

    await expect(progressBar).toHaveText('75%')

})
