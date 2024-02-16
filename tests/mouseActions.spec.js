const { test, expect } = require('@playwright/test')

test.describe('Mouse action testing', () => {

    // test.beforeEach(async ({ page }) => {
    //     await page.goto('https://practice-automation.com/')
    // })

    test.skip('Mouse hover', async ({ page }) => {

        await page.goto('https://practice-automation.com/')
        await page.getByText('Hover').click()
        const hoverField = await page.locator('#mouse_over')

        await expect(hoverField).toHaveText('Mouse over me')

        await hoverField.hover()

        await expect(hoverField).toHaveText('You did it!')
    })

    test.skip('Mouse doubleclick', async ({ page }) => {

        await page.goto('https://testautomationpractice.blogspot.com/')

        const copyTextBtn = await page.locator('//button[text()="Copy Text"]')
        const field1 = await page.locator('#field1')
        const field2 = await page.locator('#field2')

        await expect(field1).toHaveValue('Hello World!')
        await expect(field2).toBeEmpty()

        await copyTextBtn.dblclick()

        await expect(field1).toHaveValue('Hello World!')
        await expect(field2).toHaveValue('Hello World!')

        await page.pause()
    })

    test('Mouse drag and drop actions', async ({ page }) => {

        await page.goto('https://testautomationpractice.blogspot.com/')

        const dragItem = await page.locator('div[id="draggable"]')
        const dropBox = await page.locator('div[id="droppable"]')

        await page.mouse.wheel(0, 500)

        await expect(dropBox).toHaveText('Drop here')

        //approach 1
        // await dragItem.hover()
        // await page.mouse.down()

        // await dropBox.hover()
        // await page.mouse.up()

        //approach 2
        await dragItem.dragTo(dropBox)

        await expect(dropBox).toHaveText('Dropped!')
    })
})