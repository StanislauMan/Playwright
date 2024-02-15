const { test, expect } = require('@playwright/test')

test('Tables testing', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator('#productTable')

    const columns = await table.locator('thead tr th')
    const rows = await table.locator('tbody tr')

    await expect(await columns.count()).toBe(4)
    await expect(await rows.count()).toBe(5)

    // //select an unique product
    // const uniqueRow = rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Product 4'
    // })

    // await matchedRow.locator('input').check()

    // //select multiple products by re-usable function
    // await selectProduct(page, rows, 'Product 1')
    // await selectProduct(page, rows, 'Product 2')
    // await selectProduct(page, rows, 'Product 4')
    // await selectProduct(page, rows, 'Product 5')

    //print all product details using for loop
    // for (let i = 0; i < await rows.count(); i++){
    //     const row = rows.nth(i)
    //     const tableData = row.locator('td')

    //     for(let j = 0; j < await tableData.count() - 1; j++){

    //         console.log(await tableData.nth(j).textContent())
    //     }
    // }


    const pages = await page.locator('#pagination li a')

    for (let k = 0; k < await pages.count(); k++){

        if(k > 0){
            
            await pages.nth(k).click()
        }
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i)
            const tableData = row.locator('td')

            for (let j = 0; j < await tableData.count() - 1; j++) {

                console.log(await tableData.nth(j).textContent())
            }
        }
    }

})

async function selectProduct(page, rows, name) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })

    await matchedRow.locator('input').check()
}