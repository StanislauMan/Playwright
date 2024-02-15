const { test, expect } = require('@playwright/test')

test('Tables testing', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator('#productTable')

    const columns = await table.locator('thead tr th')
    const rows = await table.locator('tbody tr')

    await expect(await columns.count()).toBe(4)
    await expect(await rows.count()).toBe(5)

    // const uniqueRow = rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Product 4'
    // })

    // await matchedRow.locator('input').check()

    await selectProduct(page, rows, 'Product 1')
    await selectProduct(page, rows, 'Product 2')
    await selectProduct(page, rows, 'Product 4')
    await selectProduct(page, rows, 'Product 5')


})

async function selectProduct(page, rows, name) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })

    await matchedRow.locator('input').check()
}