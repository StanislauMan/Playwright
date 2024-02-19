const { test, expect } = require('@playwright/test')
const exp = require('constants')

let userId

test('Get list of users', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    await expect(response.status()).toEqual(200)
})

test('Create an user', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "Test_User",
            "job": "master"
        },
        headers: {
            "Accept": "application/json"
        }
    })
    
    console.log(await response.json())
    await expect(response.status()).toEqual(201)

    let res = await response.json()
    userId = res.id
    console.log(await userId)
})

test('Update the user', async({ request }) => {

    const response = await request.put(`https://reqres.in/api/users/${userId}`, {
        data: {
            "name": "Test_User_UPD",
            "job": "Engineer"
        },
        headers: {
            "Accept": "application/json"
        }
    })

    let responseBody = await response.json()
    console.log(await responseBody)

    await expect(response.status()).toEqual(200)
    await expect(responseBody.name).toEqual('Test_User_UPD')
    await expect(responseBody.job).toEqual('Engineer')
})

test('Delete the user', async({ request }) => {

    const response = await request.delete(`https://reqres.in/api/users/${userId}`)

    console.log(await response.status())

    await expect(response.status()).toEqual(204)
})

test('Get the deleted user by id', async({ request }) => {

    const response = await request.get('https://reqres.in/api/users/${userId}')

    console.log(await response.status())

    await expect(response.status()).toEqual(404)
})